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
    m[p+"invoice"]  ={url:H+"/business/invoice/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    
    m[p+"client-count"]         ={url:H+"/business/client-count/page.html",Table:"coreplus-client",form_module:'jsonv',prefix:p};
    m[p+"client-count-chart"]   ={url:H+"/business/client-count-chart/page.html",Table:"coreplus-client",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-name"]                   ={url:H+"/business/referral-count-by-name/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-name-chart"]             ={url:H+"/business/referral-count-by-name-chart/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-name-2021"]              ={url:H+"/business/referral-count-by-name-2021/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-name-2021-chart"]        ={url:H+"/business/referral-count-by-name-2021-chart/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-name-2022"]              ={url:H+"/business/referral-count-by-name-2022/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-name-2022-chart"]        ={url:H+"/business/referral-count-by-name-2022-chart/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-name-address"]           ={url:H+"/business/referral-count-by-name-address/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-name-address-2021"]      ={url:H+"/business/referral-count-by-name-address-2021/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-name-address-2022"]      ={url:H+"/business/referral-count-by-name-address-2022/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-year"]                   ={url:H+"/business/referral-count-by-year/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-year-chart"]             ={url:H+"/business/referral-count-by-year-chart/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-month-2022"]              ={url:H+"/business/referral-count-by-month-2022/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-month-2022-chart"]        ={url:H+"/business/referral-count-by-month-2022-chart/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-month-2021"]              ={url:H+"/business/referral-count-by-month-2021/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"referral-count-by-month-2021-chart"]        ={url:H+"/business/referral-count-by-month-2021-chart/page.html",Table:"coreplus-referral",form_module:'jsonv',prefix:p};
    m[p+"income-2022-chart"]         ={url:H+"/business/income-2022-chart/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    m[p+"income-2022-data"]         ={url:H+"/business/income-2022-data/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    m[p+"income-2021-chart"]         ={url:H+"/business/income-2021-chart/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    m[p+"income-2021-data"]         ={url:H+"/business/income-2021-data/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    m[p+"income-all-chart"]         ={url:H+"/business/income-all-chart/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    m[p+"income-all-data"]          ={url:H+"/business/income-all-data/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};

    m[p+"revenue-by-site-all-data"]          ={url:H+"/business/revenue/revenue-by-site-all-data/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    m[p+"revenue-by-site-all-chart"]          ={url:H+"/business/revenue/revenue-by-site-all-chart/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    m[p+"revenue-by-site-2022-data"]          ={url:H+"/business/revenue/revenue-by-site-2022-data/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    m[p+"revenue-by-site-2022-chart"]          ={url:H+"/business/revenue/revenue-by-site-2022-chart/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    m[p+"revenue-by-site-2021-data"]          ={url:H+"/business/revenue/revenue-by-site-2021-data/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    m[p+"revenue-by-site-2021-chart"]          ={url:H+"/business/revenue/revenue-by-site-2021-chart/page.html",Table:"coreplus-invoice",form_module:'jsonv',prefix:p};
    
})();
