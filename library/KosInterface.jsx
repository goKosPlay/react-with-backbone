/**
 * Created by kos-play on 2015/4/3.
 */
define(['react'], function(React) {
   'use strict';
   var MyInterface = React.createClass({
       render:function() {
           return (
               <div className="test one two">測試內文
                   <h1>智能測試</h1>
               </div>
           )
       }
   });
   var MyMessage = React.createClass({
        render:function() {
          return (
              <div className="kos_form">
                <MyInterface></MyInterface>
                <input type="text" name="myText" value="abc"/>
                <input type="text" name="myText1" value="bbc"/>
              </div>

          )
        }
   });
    return MyMessage;
});