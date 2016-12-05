// ==UserScript==
// @name         NerdCubed Search Persist
// @version      1.1
// @description  Make searches on nerdcubed.co.uk persist across clicks
// @author       thislooksfun
// @copyright    2016, thislooksfun (thislooksfun.github.io)
// @license      GPL v3; https://github.com/thislooksfun/nerdcubed_search_persist/blob/master/LICENSE
// @match        http://www.nerdcubed.co.uk/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @homepageURL  https://github.com/thislooksfun/nerdcubed_search_persist
// @supportURL   https://github.com/thislooksfun/nerdcubed_search_persist/issues
// @downloadURL  https://github.com/thislooksfun/nerdcubed_search_persist/raw/master/nerdcubed_search_persist.user.js
// ==/UserScript==

// ==OpenUserJS==
// @author thislooksfun
// ==/OpenUserJS==

/**

Make searches on nerdcubed.co.uk persist across clicks
Copyright (C) 2016  thislooksfun

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

**/

(function() {
    'use strict';
    
    $(document).ready(function() {
       
        $('#search').on('change keyup keydown paste', function() { setTimeout(searchChanged($(this).val()), 100); });
        
        function searchChanged(searchVal) {
            $('#video-picker .grid a').each(function() {
                let oldVal = $(this).attr('href');
                let mainLink = oldVal.substr(0, oldVal.lastIndexOf('/') + 1);
                $(this).attr('href', searchVal == '' ? mainLink : mainLink + '?q=' + encodeURIComponent(searchVal));
            });
        }
        
        setTimeout($('#search').change(), 100);
        
    });
    
})();
