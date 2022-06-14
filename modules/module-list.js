(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"device-number"]     ={url:H+"/business/device-number/page.html",prefix:p,router:1};

    m[p+"client"]    ={url:H+"/business/client/page.html",Table:"coreplus-client",form_module:'jsonv',prefix:p};
    m[p+"referral"]  ={url:H+"/business/referral/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referrer"]  ={url:H+"/business/referrer/page.html",Table:"coreplus-referrer",form_module:'jsonv',prefix:p};
    
    m[p+"client-count"]         ={url:H+"/business/client-count/page.html",Table:"coreplus-client",form_module:'jsonv',prefix:p};
    m[p+"client-count-chart"]   ={url:H+"/business/client-count-chart/page.html",Table:"coreplus-client",form_module:'jsonv',prefix:p};


})();
