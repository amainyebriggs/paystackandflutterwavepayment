 
This is an implementation of paystack and flutterwave in react native

* note:this module depends on react-native-webview

Step 1:npm install react-native-webview for npm yarn install react-native-webview for yarn add react-native-webview
step 2: copy payment to project root directory
step 3:   import Makepayments from './payments';



examples

Example 1 paystack:

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



Example 2 flutterwave:


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


Example 3 both(paystack & flutterwave):

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


* things to note *

the properties of senddatatowebview,
Name: this is customers name
appname:is your application name, this is optional
email:customers email
amount:amount to receive from customers.
payment_channel_option:paystack,flutterwave or both must be seperated by comma(,).


