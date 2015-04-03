/**
 * Created by kos-play on 2015/4/3.
 */
define(['react'], function(React) {
   'use strict';
   var MyInterface = React.createClass({
       render:function() {
           return (
               <div className="test one two">測試內文2
                   <h1>智能測試2</h1>
               </div>
           )
       }
   });
   var MyMessage = React.createClass({
        getInitialState: function() {
          return {myText: 'Hello!',myText2:'World!'};
        },
        handleChange: function(newValue) {
          this.setState({message: newValue});
        },
        render:function() {
          var myText = this.state.myText;
          var myText2 = this.state.myText2;
          return (
              <div className="kos_form">
                <MyInterface></MyInterface>
                標題：<input type="text" name="myText" placeholder="標題"/>
                資訊：<input type="text" name="myText1" placeholder="資訊內文"/>
              </div>

          )
        }
   });
    return MyMessage;
});