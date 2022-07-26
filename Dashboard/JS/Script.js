View_CDI = {
    vars: {
        View_CDI: []
    },
    fn: {}
};
View_CDI.vars.webUrl = _spPageContextInfo.webAbsoluteUrl;
View_CDI.vars.CDIList = "Critical_Data_Inventory_CDI";
View_CDI.vars.CDIData = [];
View_CDI.vars.Locations = [];
View_CDI.vars.OpCos = [];
View_CDI.vars.subOpCos = [];
$(document).ready(function () {
    setTimeout(
        function () {
            $("#userImage").attr("src", "/_layouts/15/userphoto.aspx?size=M&username=" + InjectScript.vars.currentUserEmail);
            $("#UserName").text("Welcome " + InjectScript.vars.currentUserDisplayName);
        }, 2000);
    View_CDI.fn.InitiateLoadFunctions();
});

View_CDI.fn.InitiateLoadFunctions = function () {
    if(InjectScript.vars.currentUserLevel == "CDI_Process_Owners" || InjectScript.vars.currentUserLevel == "CDI_Internal_Audit_Team" || InjectScript.vars.currentUserLevel == "CDI_Finance_Controller" || InjectScript.vars.currentUserLevel == "CDI_CFO" || InjectScript.vars.currentUserLevel == "CDI_User"){
        var query = "?$select=OperatingCompany,SubOperatingCompany,Location&$top=5000&$filter=OperatingCompany eq '"+InjectScript.vars.UserCorp+"'";
        $("#OpCoText").append("</br><span>("+InjectScript.vars.UserCorp+")</span>");
    }
    else{
        var query = "?$select=OperatingCompany,SubOperatingCompany,Location&$top=5000";
    }
    InjectScript.fn.getListItems(View_CDI.vars.webUrl, View_CDI.vars.CDIList, query, true).done(function (data) {
        $('.loader').fadeOut();
        View_CDI.fn.getUniqueValues(data);
    });
}

View_CDI.fn.getUniqueValues = function(data){
    _.each(_.map(data,"Location"),function(value){
        if(value != null){
            _.each(value.split(";"),function(val){
                if(val){
                    if(!_.contains(View_CDI.vars.Locations,val)){
                        View_CDI.vars.Locations.push(val);
                    }
                }
            })
        }
    });
    View_CDI.vars.OpCos = _.uniq(_.map(data, 'OperatingCompany'));
    View_CDI.vars.subOpCos = _.uniq(_.map(data, 'SubOperatingCompany'));

    $("#locationCount").text(View_CDI.vars.Locations.length);
    $("#opcoCount").text(View_CDI.vars.OpCos.length);
    $("#subOpcoCount").text(View_CDI.vars.subOpCos.length);
}

View_CDI.fn.showUniqueValues = function(section,variable){
    $(".items-head p").text(section);
    $(".items-body").empty();
    _.each(View_CDI.vars[variable],function(data){
        $(".items-body").append('<div class="items-body-content"><span>'+data+'</span></div>')
    })
    $(".containers").show();
}