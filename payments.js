
import {WebView} from 'react-native-webview';
import {
    Alert,
    Button,
      SafeAreaView,
      ScrollView,
      StatusBar,
      StyleSheet,
      Text,
      useColorScheme,
      View,
      Image,
      Modal,
    } from 'react-native';
import { useEffect, useState } from 'react';
const network = require("./staticimage.png");


  
  function Makepayments(props) {
  const [show, setshow]=useState(false);
  const [networkche, setnetworkche]=useState(false);
  
  const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=';


const checknetfun =async ()=>{


  const endpoint = "https://google.com";
  try {
    let controller = new AbortController()
    setTimeout(() => controller.abort(), 1000*10); 
    const response = await fetch(endpoint,{signal: controller.signal})
      .then(response => {


        if (response.status>=200 && response.status <300) {
          setshow(true);

        }
       })
  }
  catch (error) {
    Alert.alert(error.toString());
    setshow(false);
    props.senddata('Network error'); 
    return props;

}

}


(()=>{
  checknetfun();
})();





      function getwebviewpostmessage(datare) {
        const getdatafromwebview=JSON.parse(datare.nativeEvent.data);
        if (getdatafromwebview=="Closed") {
          setshow(false);
        }
          props.senddata(getdatafromwebview); 
          return props;

        }
    
       return(
        <Modal style={{ flex: 1, backgroundColor: "white" }} transparent={true} animated={false} hardwareAccelerated={false} visible={show}>
        <WebView 
 scalesPageToFit={false}
 onShouldStartLoadWithRequest={request => {
  if (request.url.includes('https')) {
      return false;
  } else return true;
 }}
 mixedContentMode="compatibility"
 onMessage={(datas)=>{getwebviewpostmessage(datas)}}
 injectedJavaScriptObject={{ datasenttome: props.senddatatowebview }}
 startInLoadingState={true}
scalesPageToFit={true} 
javaScriptEnabled={true}


// onError={(event) => {

//   Alert.alert(''+event+'',  '', [

//       {

//           text: 'Cancel',

//           onPress: () => {

//           setshow(false);

//         },

//       },

//       {

//           text: 'Retry',

//           onPress: () => {

//               this.webView.reload();

//           },

//       },

//   ]);

// }}

 source={{
   html: ` 
   <html>
   <head>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.5.3/js/bootstrap.min.js" integrity="sha512-8qmis31OQi6hIRgvkht0s6mCOittjMa9GMqtK9hes5iEQBQE/Ca6yGE5FsW36vyipGoWQswBj/QBm2JR086Rkw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

     <script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js" integrity="sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
     <script src="https://js.paystack.co/v1/inline.js"></script>
     <script src="https://checkout.flutterwave.com/v3.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.5.3/css/bootstrap.min.css" integrity="sha512-oc9+XSs1H243/FRN9Rw62Fn8EtxjEYWHXRvjS43YtueEewbS6ObfXcJNyohjHqVKFPoXXUxwc+q1K7Dee6vv9g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
     

     <style>
input[type=radio] {
    display: none;
}
input[type=radio] {
    display: inline-block;
    border: 1px solid #000;
    border-radius: 50%;
    margin: 0 0.5em;
}
input[type=radio]:checked{
    background-color: #ffa;
}
.radio1 {
    width: 0.5em;
    height: 0.5em;
}
.radio2 {
    width: 0.75em;
    height: 0.75em;
}
.radio3 {
    width: 1em;
    height: 1em;
}
.radio4 {
    width: 1.5em;
    height: 1.5em;
}
</style> 

        </head>


<body style="background-color:#ffff"; id="mybody">
<center>

<div class="container">

<img id="loader" style="margin-top:120px;" alt="" src="" />

<div class="card-body" id="payselect" style="display:none;">

<h4 class="card-title" id="amountshow"></h4>

<p class="card-title">Select payment Channel</p>
<br>


<div class="row">


<div class="col-md-6 text-left">
<div class="form-check form-check-inline ">
  <input class="form-check-input radio4" type="radio" name="inlineRadioOptions" id="paystack" value="Paystack">
  <label class="form-check-label" for="paystack"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Paystack_Logo.png/1200px-Paystack_Logo.png" width='80px' /></label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input radio4" type="radio" name="inlineRadioOptions" id="flutterwave" value="Flutterwave" >
  <label class="form-check-label" for="flutterwave"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flutterwave_Logo.png/1024px-Flutterwave_Logo.png" width='120px' /></label>
</div>
</div>

<div class="col-md-6 text-left">

</div>
</div>

<div class="row">
<div class="col-md-12">
<br>

<center>
<button type="button" id="paycancel" class="btn btn-md btn-danger mr-2">Cancel</button>
<button type="button" id="paynow" class="btn btn-md btn-success mr-2">Pay</button>
</div>


                                                    
                                                        </div>

</div>
</div>

</center>

</body>


<script type="text/javascript">


  var sentintome=JSON.parse(window.ReactNativeWebView.injectedObjectJson()).datasenttome;

  // Call this code when the page is done loading.


  var randnn=Math.floor(Math.random() * 10);
  var bb=Date.now();
 var userref=''+bb.toString()+'';
 var ts = Math.round((new Date()).getTime() / 1000);
 var randkey=userref.concat(randnn).concat(ts);
 var hashmd = CryptoJS.MD5(randkey);
var str = ''+hashmd+''; 
 goodrand = sentintome.appname+'-'.concat(str.slice(0, 7));
 realamounto=parseFloat((sentintome.amount*100));





 $( document ).ready(function() {




var payment_channel_option=sentintome.payment_channel_option.split(",");

    if (payment_channel_option.length>1) {
      $("#payselect").show();
      $("#amountshow").html('&#x20A6;'+sentintome.amount.toLocaleString('en-US')+'');

    }else {

if (payment_channel_option.length<2 && payment_channel_option[0]=="paystack") {
  payWithPaystack(realamounto,goodrand); 
}

if (payment_channel_option.length<2 && payment_channel_option[0]=="flutterwave") {
  makePayment(realamounto,goodrand);
}

    }



  

  function payWithPaystack(realamounto,goodrand){
  
    var handler = PaystackPop.setup({
    key: sentintome.paystackpubkey,
    email: sentintome.email,
    amount: realamounto,
    currency: "NGN",
    ref: ''+goodrand+'', // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    firstname: sentintome.name,
    // label: "Optional string that replaces customer email"
    metadata: {
       custom_fields: [
          {
              display_name: "Buyer",
              variable_name: "buyer",
              value: sentintome.appname
          }

       ]
    },
    callback: function(response){

      status(response);

    },
    onClose: function(){
      status('Closed');
    }
  });
  handler.openIframe();

}



function makePayment(realamounto,goodrand) {

  FlutterwaveCheckout({
    public_key: sentintome.flutterwavepubkey,
    tx_ref: ''+goodrand+'',
    amount: ''+realamounto/100+'',
      currency: "NGN",
      payment_options: "card, banktransfer, ussd",
      callback: function(payment) {
        status(response);
      },
      onclose: function(incomplete) {
        status('Closed');

      },
      customer: {
        email: sentintome.email,
        phone_number: sentintome.phone,
        name: sentintome.name,
      },
      customizations: {
        title: sentintome.appname,
        description: "Payment collection",
        logo: "",
      },
    });
  }






 function status(status){
  datasentoutofme=status;

  window.ReactNativeWebView.postMessage(JSON.stringify(datasentoutofme));
 }


 $("#paycancel").click(function() {

  status('Closed');
});



 $("#paynow").click(function() {

  
        var paystack = document.getElementById('paystack');
        var flutterwave = document.getElementById('flutterwave');
            var isCheckedpaystack = paystack?.checked;
            var isCheckedflutterwave = flutterwave?.checked;

if (isCheckedpaystack || isCheckedflutterwave) {
      if (isCheckedpaystack) {
    payWithPaystack(realamounto,goodrand);
}

            if (isCheckedflutterwave) {
       makePayment(realamounto,goodrand); 
}  
}else {
  Swal.fire({
    text: "Please select payment Channel",
    icon: "error"
  });
}
      


});




 
});
 
</script>

 </html>        
`,
 }}
/>
</Modal>
);
     



    }

    var styles = StyleSheet.create({
      webview: {
        position: 'absolute',
        width:"100%",
        height:"100%",
        zIndex:2
    }
    ,   container: {
      justifyContent: 'center',
      alignItems: 'center',
              backgroundColor: '#fff'

    },
    logo: {
      top: 0,
      width: 400,
      height: 400,
    },
    
  loadingImage: {
     
      resizeMode: 'contain',
      width: 400, height: 400,
  },
  loading: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  },
  });
    export default Makepayments;