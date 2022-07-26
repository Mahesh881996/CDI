View_CDI = {
    vars: {
        View_CDI: []
    },
    fn: {}
};
View_CDI.vars.webUrl = _spPageContextInfo.webAbsoluteUrl;
View_CDI.vars.CDIList = "Critical_Data_Inventory_CDI";
View_CDI.vars.shareList = "CDI_Share";
View_CDI.vars.powerAppURL = "https://apps.powerapps.com/play/6babbba8-425f-46a4-9b56-1012e4356e0c?tenantId=3d2d2b6f-061a-48b6-b4b3-9312d687e3a1";
View_CDI.vars.CDIData = [];
View_CDI.vars.myPendingItems = [];
View_CDI.vars.myCompletedItems = [];
View_CDI.vars.pendingColumnOptions = [{
    "mData": "Id",
    "title": "ID",
    "visible":false
},
{
    "mData": "DataItemID",
    "title": "Data Item ID",
},
{
    "mData": "OpCo",
    "title": "Operating Company",
    "visible":false
},
{
    "mData": "SubOpCo",
    "title": "Sub Operating Company",
    
},
{
    "mData": "BusinessFunction",
    "title": "Business Function",
},
{
    "mData": "BusinessProcess",
    "title": "Business Process",
},
{
    "mData": "DataItem",
    "title": "Data Item"
   
},
{
    "title": "Edit",
    "render": function (data, type, row) {
        return '<a target="_blank" href="'+View_CDI.vars.powerAppURL+'&User=Normal&Id='+row.Id+'"><i style="font-size:16px;" class="fa fa-edit"></i></a>'
    },
    "className": "text-center"
}];
View_CDI.vars.completedColumnOptions = [{
    "mData": "Id",
    "title": "ID",
    "visible":false
},
{
    "mData": "DataItemID",
    "title": "Data Item ID",
},
{
    "mData": "OpCo",
    "title": "Operating Company",
    "visible":false
},
{
    "mData": "SubOpCo",
    "title": "Sub Operating Company",
    
},
{
    "mData": "BusinessFunction",
    "title": "Business Function",
},
{
    "mData": "BusinessProcess",
    "title": "Business Process",
},
{
    "mData": "DataItem",
    "title": "Data Item",
},
{
    "title": "Edit",
    "render": function (data, type, row) {
        return '<a target="_blank" href="'+View_CDI.vars.powerAppURL+'&User=Normal&Id='+row.Id+'"><i style="font-size:16px;" class="fa fa-edit"></i></a>'
    },
    "className": "text-center",
    "visible": false
}];
$(document).ready(function () {
    setTimeout(
        function () {
            $("#userImage").attr("src", "/_layouts/15/userphoto.aspx?size=M&username=" + InjectScript.vars.currentUserEmail);
            $("#UserName").text("Welcome " + InjectScript.vars.currentUserDisplayName);
        }, 2000);
        $("#tabs").tabs();
    View_CDI.fn.InitiateLoadFunctions();
});

View_CDI.fn.InitiateLoadFunctions = function () {
    var CDIquery = "?$select=*,ThirdPartyDetails,SystemsApplications,ProcessOwner/EMail,DataReviewer/EMail,DataCustodian/EMail,FileServerOwner/EMail,Author/Id&$top=5000&$orderby=Created desc&$expand=ProcessOwner,DataReviewer,DataCustodian,FileServerOwner,Author&$filter=(Author/Id eq '" + InjectScript.vars.currentUserId + "')";
    var shareListQuery = "?$select=*,CDI/DataItemID,CDI/ID,CDI/OperatingCompany,CDI/SubOperatingCompany,CDI/BusinessFunction,CDI/BusinessProcess,User_x0020_Name/EMail,User_x0020_Name/Id&$expand=CDI,User_x0020_Name&$filter=(User_x0020_Name/Id eq '" + InjectScript.vars.currentUserId + "')&$orderby=Modified desc";
    InjectScript.fn.getListItems(View_CDI.vars.webUrl, View_CDI.vars.CDIList, CDIquery, true).done(function (data) {
        InjectScript.fn.getListItems(View_CDI.vars.webUrl, View_CDI.vars.shareList, shareListQuery, true).done(function (shareData) {
            _.forEach(data, function (val) {
                if(val.FinalSubmissionStatus == "Completed" || val.FinalSubmissionStatus == "Final"){
                    View_CDI.vars.myCompletedItems.push({
                        "Id": val.Id,
                        "DataItemID": val.DataItemID,
                        "OpCo": val.OperatingCompany,
                        "SubOpCo": val.SubOperatingCompany,
                        "BusinessFunction" : val.BusinessFunction,
                        "BusinessProcess":  val.BusinessProcess,
                        "DataItem": val.DataItem
                    });
                }
                else{
                    View_CDI.vars.myPendingItems.push({
                        "Id": val.Id,
                        "DataItemID": val.DataItemID,
                        "OpCo": val.OperatingCompany,
                        "SubOpCo": val.SubOperatingCompany,
                        "BusinessFunction" : val.BusinessFunction,
                        "BusinessProcess":  val.BusinessProcess,
                        "DataItem": val.DataItem
                    });
                }
            });
            _.forEach(shareData, function (val) {
                if(val.Status == "Completed" || val.Status == "Final"){
                    View_CDI.vars.myCompletedItems.push({
                        "Id": val.CDI.ID,
                        "DataItemID": val.CDI.DataItemID,
                        "OpCo": val.CDI.OperatingCompany,
                        "SubOpCo": val.CDI.SubOperatingCompany,
                        "BusinessFunction" : val.CDI.BusinessFunction,
                        "BusinessProcess":  val.CDI.BusinessProcess,
                        "DataItem": val.DataItem
                    });
                }
                else{
                    View_CDI.vars.myPendingItems.push({
                        "Id": val.CDI.ID,
                        "DataItemID": val.CDI.DataItemID,
                        "OpCo": val.CDI.OperatingCompany,
                        "SubOpCo": val.CDI.SubOperatingCompany,
                        "BusinessFunction" : val.CDI.BusinessFunction,
                        "BusinessProcess":  val.CDI.BusinessProcess,
                        "DataItem": val.DataItem
                    });
                }
            });
            $('.loader').fadeOut();
            $('#myDraft').DataTable({
                "autoWidth": false,
                "aaData": View_CDI.vars.myPendingItems,
                "aoColumns": View_CDI.vars.pendingColumnOptions
            });
            $('#myCompleted').DataTable({
                "autoWidth": false,
                "aaData": View_CDI.vars.myCompletedItems,
                "aoColumns": View_CDI.vars.completedColumnOptions
            });
        })
    });
}

View_CDI.fn.splitData = function (data) {
    var returnData = "";
    if (data) {
        _.each(data.split(";"), function (value) {
            if (value != "" && value != ";" && value != '\r\n') {
                returnData += value + ","
            }
        })
    }
    else {
        return "";
    }
    return returnData.replace(/,(\s+)?$/, '');;
}

View_CDI.fn.GetMultiLookupData = function (data, Column) {
    var returnData = "";
    if (data.results.length > 0) {
        returnData = (_.map(data.results, function (item) {
            return item[Column];
        })).join(",")
    }
    else {
        returnData = "";
    }

    return returnData
}

View_CDI.fn.GetLookupData = function (data, Column) {
    if (data[Column]) {
        return data[Column]
    }
    else {
        return "";
    }
}

View_CDI.fn.GetPeoplePickerData = function (data) {
    if (data.EMail) {
        return data.EMail;
    }
    else {
        return "";
    }
}

View_CDI.fn.GetMultiSelectChoiceData = function (data) {
    if (data && data.results) {
        return data.results[0];
    }
    else {
        return "";
    }
}