CDI_Home = {
    vars: {
        CDI_Home: []
    },
    fn: {}
};
CDI_Home.vars.webUrl = _spPageContextInfo.webAbsoluteUrl;
CDI_Home.vars.AccessRequests = "AccessRequests";
CDI_Home.vars.CDIList = "Critical_Data_Inventory_CDI";
CDI_Home.vars.SegmentsList = "DoverSegmentStructureList";
CDI_Home.vars.powerAppURL = "https://apps.powerapps.com/play/6babbba8-425f-46a4-9b56-1012e4356e0c?tenantId=3d2d2b6f-061a-48b6-b4b3-9312d687e3a1";
$(document).ready(function () {
    setTimeout(
        function () {
            $('.loader').fadeOut();
            $("#userImage").attr("src", "/_layouts/15/userphoto.aspx?size=M&username=" + InjectScript.vars.currentUserEmail);
            $("#UserName").text("Welcome " + InjectScript.vars.currentUserDisplayName);
        }, 2000);
    $("[accessUsers]").hide();
    $("[accessUsers*='"+InjectScript.vars.currentUserLevel+"']").show();
    CDI_Home.fn.InitiateLoadFunctions();
    $('.aboutUsSlider').carousel({
        interval: false,
    });
    if(InjectScript.vars.currentUserLevel == "Site Owner" || InjectScript.vars.currentUserLevel == "CDI_Admin_Team"){
        $("#powerAppURL").attr("href",CDI_Home.vars.powerAppURL+"?User=Admin");
    }
    else{
        $("#powerAppURL").attr("href",CDI_Home.vars.powerAppURL+"?User=Normal");
    }
    
});

CDI_Home.fn.InitiateLoadFunctions = function () {
    $("#aboutUs").click(function () {
        $("#aboutUsModal").modal('show');
    });
    $("#requestAccess").click(function () {
        var oldRequestsQuery = "?$select=Title,SubOpCo,RequestedBy/EMail,RequestedOn,RequestStatus,Id&$orderby=Id desc&$expand=RequestedBy&$filter=RequestedBy eq '" + InjectScript.vars.currentUserId + "'";
        InjectScript.fn.getListItems(CDI_Home.vars.webUrl, CDI_Home.vars.AccessRequests, oldRequestsQuery, true).done(function (data) {
            var table = $("#oldRequests").DataTable({
                "aaData": data,
                searching: false,
                ordering: false,
                "lengthChange": false,
                "pageLength": 15,
                "autoWidth": true,
                "language": {
                    "emptyTable": "No previous Access requests available"
                },
                "bDestroy": true,
                "aoColumns": [
                    {
                        "mData": "",
                        render: function (data, type, row, meta) {
                            return meta.row + meta.settings._iDisplayStart + 1;
                        }
                    },
                    {
                        "mData": "Title",
                        "title": "OpCO"
                    },
                    {
                        "mData": "SubOpCo",
                        "title": "Sub OpCo"
                    },
                    {
                        "mData": "RequestedOn",
                        "title": "Requested On",
                        render: function (d) {
                            return moment(d).format("DD/MM/YYYY");
                        }
                    },
                    {
                        "mData": "RequestStatus",
                        "title": "Request Status"
                    },
                    {
                        "mData": "Id",
                        "title": "Action",
                        render: function (data, type, row) {
                            if (row.RequestStatus == "Approved" || row.RequestStatus == "Waiting for Approval") {
                                return "<img onclick='CDI_Home.fn.cancelAccessRequest(" + data + ")' src='https://dover.sharepoint.com/sites/CriticalDataInventory-CDICSFProject/Resources/Images/close.png' height='15' size='15'/>"
                            }
                            else {
                                return "";
                            }
                        },
                        "className": "text-center"
                    }
                ]
            });
            $("#oldRequests #cancelAccessRequest").on('click', function () {
                console.log($(this));
            })
        })
        $("#requestAccessModal").modal('show');
    });
    $('#requestAccessModal').on('hidden.bs.modal', function () {
        var table = $("#oldRequests").DataTable();
        table.destroy();
        $("#opCoField").val('');
        $("#submitAccessRequest").attr('disabled', true);
    });
    $("#opCoField").change(function () {
        if ($(this).val() != '') {
            $("#submitAccessRequest").attr('disabled', false);
        }
        else {
            $("#submitAccessRequest").attr('disabled', true);
        }
    });
    $("#viewCDI").click(function () {
        window.location.href = "https://dover.sharepoint.com/sites/CriticalDataInventory-CDICSFProject/SitePages/View%20your%20CDI.aspx";
    });
    $("#generateReport").click(function(){
        window.location.href="https://dover.sharepoint.com/sites/CriticalDataInventory-CDICSFProject/SitePages/Report.aspx";
    })
    var segmentListQuery = "?$select=*&$top=5000";
    InjectScript.fn.getListItems(CDI_Home.vars.webUrl, CDI_Home.vars.SegmentsList, segmentListQuery, true).done(function (data) {
        var OpCo = _.uniq(_.map(data, 'field_2'));
        var subOpCo = _.uniq(_.map(data, 'field_3'));
        $("#opCoField").append(_.map(OpCo, function (string) { return '<option value="' + string + '">' + string + '</option>' }).join(""));

    })
}

CDI_Home.fn.submitAccessRequest = function () {
    var payLoad = {
        "Title": $("#opCoField").val(),
        "RequestedById": InjectScript.vars.currentUserId,
        "RequestedOn": new Date(),
        "RequestStatus": "Waiting for Approval"
    }

    InjectScript.fn.addListItem(CDI_Home.vars.webUrl, CDI_Home.vars.AccessRequests, payLoad).done(function (data) {
        Swal.fire({
            icon: 'success',
            title: 'Your Access request has been created and sent for Approval.',
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
        }).then(function () {
            $('#requestAccessModal').modal('hide');
        });
    })
}

CDI_Home.fn.cancelAccessRequest = function (data) {
    var payload = {
        "RequestStatus": "Cancelled"
    };

    Swal.fire({
        title: 'Do you want to Cancel this request?',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        CancelButtonText:'No',
        allowOutsideClick: false,
        allowEscapeKey: false,
    }).then(function (result) {
        if (result.value) {
            InjectScript.fn.updateListItem(CDI_Home.vars.webUrl, CDI_Home.vars.AccessRequests, data, payload, "", true).done(function (data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Your Request has been cancelled',
                    showConfirmButton: true,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                }).then(function () {
                    $("#requestAccess").trigger("click");
                });
            });
        }
    });
}

CDI_Home.fn.checkRecords = function(){
    var query = "?$select=ID,ProcessOwner/Id&$expand=ProcessOwner&$filter=ProcessOwner/Id eq '" + InjectScript.vars.currentUserId + "'";
    InjectScript.fn.getListItems(CDI_Home.vars.webUrl, CDI_Home.vars.CDIList, query, true).done(function (data) {
        if(data.length > 0){
            window.location.href = "https://dover.sharepoint.com/sites/CriticalDataInventory-CDICSFProject/Pages/ShowMyRecords.aspx";
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Only Process Owners can access this page',
                showConfirmButton: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
            })
        }
    });
}