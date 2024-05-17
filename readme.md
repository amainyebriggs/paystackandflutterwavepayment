 
<p style="font-weight:bold;">This is an implementation of paystack and flutterwave in react native
<br>


* note:this module depends on react-native-webview
<br>


Step 1:npm install react-native-webview for npm yarn install react-native-webview for yarn add react-native-webview
<br>
step 2: copy payment to project root directory.
<br>

step 3:   import Makepayments from './payments';
<br>



examples


<h3 style="font-weight:bold;">Example 1 paystack:</h3>


```js

import React, { useState, useEffect, useContext } from 'react';
import { Component } from 'react';
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
  } from 'react-native';


  import Makepayments from './payments';

export default function App() {
    const [buttonclick, setbuttonclick]=useState('false');


    const finalstatus=(data)=>{

      console.log(data);

      setbuttonclick('false');
    }

    return (

  <View>
{
buttonclick=="true"?
<Makepayments senddata={(data)=>{finalstatus(data)}} senddatatowebview={{appname:'amainye',email:'amainyebriggs@yahoo.com',name:'amainye briggs',paystackpubkey:'paystack public key here',flutterwavepubkey:'flutterwave public key here',amount:20000, payment_channel_option:'paystack'}}/> :""}
<Button title="Pay now" onPress={()=>{setbuttonclick('true')}}/>

  </View>


      );
}
```



<h3 style="font-weight:bold;">Example 2 flutterwave:</h3>


```js

import React, { useState, useEffect, useContext } from 'react';
import { Component } from 'react';
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
  } from 'react-native';


  import Makepayments from './payments';

export default function App() {
    const [buttonclick, setbuttonclick]=useState('false');


    const finalstatus=(data)=>{

      console.log(data);

      setbuttonclick('false');
    }

    return (

  <View>
{
buttonclick=="true"?
<Makepayments senddata={(data)=>{finalstatus(data)}} senddatatowebview={{appname:'amainye',email:'amainyebriggs@yahoo.com',name:'amainye briggs',paystackpubkey:'paystack public key here',flutterwavepubkey:'flutterwave public key here',amount:20000, payment_channel_option:'flutterwave'}}/> :""}
<Button title="Pay now" onPress={()=>{setbuttonclick('true')}}/>

  </View>


      );
}
```

<h3 style="font-weight:bold;">Example 3 both(paystack & flutterwave):</h3>


```js

import React, { useState, useEffect, useContext } from 'react';
import { Component } from 'react';
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
  } from 'react-native';


  import Makepayments from './payments';

export default function App() {
    const [buttonclick, setbuttonclick]=useState('false');


    const finalstatus=(data)=>{

      console.log(data);

      setbuttonclick('false');
    }

    return (

  <View>
{
buttonclick=="true"?
<Makepayments senddata={(data)=>{finalstatus(data)}} senddatatowebview={{appname:'amainye',email:'amainyebriggs@yahoo.com',name:'amainye briggs',paystackpubkey:'paystack public key here',flutterwavepubkey:'flutterwave public key here',amount:20000, payment_channel_option:'paystack,flutterwave'}}/> :""}
<Button title="Pay now" onPress={()=>{setbuttonclick('true')}}/>

  </View>


      );
}
```

* things to note in the properties of senddatatowebview,
<br>
Name: this is customers name.
<br>
appname:is your application name, this is optional.
<br>
email:customers email.
<br>
amount:amount to receive from customers.
<br>
payment_channel_option:paystack,flutterwave or both must be seperated by comma(,).
<br>
</p>
