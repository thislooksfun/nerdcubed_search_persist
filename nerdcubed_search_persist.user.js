// ==UserScript==
// @name         NerdCubed Search Persist
// @version      1.0
// @description  Make searches on nerdcubed.co.uk persist across clicks
// @author       thislooksfun
// @license      GPL v3; https://github.com/thislooksfun/nerdcubed_search_persist/blob/master/LICENSE
// @match        http://www.nerdcubed.co.uk/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @homepageURL  https://github.com/thislooksfun/nerdcubed_search_persist
// @supportURL   https://github.com/thislooksfun/nerdcubed_search_persist/issues
// @downloadURL  https://github.com/thislooksfun/nerdcubed_search_persist/raw/master/nerdcubed_search_persist.user.js
// ==/UserScript==

(function() {
    'use strict';
    
    $(document).ready(function() {
       
        $('#search').on('change keyup keydown paste', function() { setTimeout(searchChanged($(this).val()), 100); });
        
        function searchChanged(searchVal) {
            $('#video-picker .grid a').each(function() {
                let oldVal = $(this).attr('href');
                let newVal = oldVal.substr(0, oldVal.lastIndexOf('/') + 1) + '?q=' + encodeURIComponent(searchVal);
                $(this).attr('href', newVal);
            });
        }
        
        setTimeout($('#search').change(), 100);
        
    });
    
})();
