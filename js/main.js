/**
 * Created by jgartland on 1/3/16.
 */
(function (window, document, $, undefined){ //new pattern to me, looks like it won't hurt anything so ...
    "use strict";

    var footy_schedule = function (){
        //$.ajaxSetup({ //out of scope here, kills the call - figure out a way to centralize later
        //  headers: {'X-Auth-Token': api_key}
        //});

        var api_key = "4fd79396a3c14c06bdbc43f4925af671";

        var getFootyData = function() {

            //var url = "http://api.football-data.org/v1/soccerseasons";
            var url = "http://api.football-data.org/v1/fixtures?timeFrame=n1";

            return $.ajax({
                headers: {'X-Auth-Token': api_key},
                type: 'GET',
                url: url,
                dataType: 'json',
                error: function (request, status, error) {
                    alert("Error:" + JSON.stringify(request) + ":::" + status + "::" + error);
                }
            });

        },

        displayResults = function(d, template, charSelections) {

            //backbone model stuff here - still need to think this through
            var records = Backbone.Collection.extend({    //i think this is doable given the response data format & i don't need to worry about models?? need to do more research
                url: ''
            });

            // will these compile?...not yet
            //example to build off of
            var SingleLink = Marionette.ItemView.extend({
                //tagName: "li",
                //template: _.template("<a href='<%-path%>'><%-path%></a>")
            });
            //
            //var ListView = Marionette.CollectionView.extend({
            //    tagName: 'ul',
            //    childView: SingleLink
            //});

            //var list = new Backbone.Collection([
            //    {path: 'http://google.com'},
            //    {path: 'http://mojotech.com'},
            //]);
            //
            //(new ListView({
            //    collection: list,
            //    el: '.link-area'
            //})).render();


            var xstring = '';
            xstring = xstring + d.fixtures[0].awayTeamName + ' --- : ';
            xstring = xstring + '<a href="' + d.fixtures[0]._links.awayTeam.href + '">AWAY</a><br />'
            $('#main-header-div').html(xstring);

            var buildString = '';
            buildString = buildString + d.fixtures[0].homeTeamName + ' --- : ';
            buildString = buildString + '<a href="' + d.fixtures[0]._links.homeTeam.href + '">HOME</a><br />';

            $('#main-body-div').html(buildString);

        },

        init = function(){


            initDatasetJSON();
            //inittbd();
            //inittbd();

            function getFullDataDetail(){
                var url = "http://api.football-data.org/v1/fixtures?timeFrame=n1";
            }

            function initDatasetJSON() {

                alert('inside footy');
                var list = [];
                var t = getFootyData();
                t.done(function(data){
                    displayResults(data, $("#reportTemplate"), list)    //reportTemplate is from chris wards example, i still need to build
                                            //out a page ....clearly
                                //when thats done, i'll have a real dom object for the view display

                    //var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
                    //var res = regex.exec(data.fixtures[0]._links.awayTeam.href);
                    //var teamId = res[1];
                    //console.log('*******');
                    //console.log(teamId);
                    //console.log('*******');

                });

            }

        },//end init

        getMainData = function(){

        };

        return {
            init:init
        };
    }();

    $(document).ready(function(){
        footy_schedule.init();	// lets init our module
    }); // doc ready

})(window,document,jQuery);