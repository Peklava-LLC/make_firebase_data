let flowPageData=[
    {
     Unison Shared Equity
    logo:'unison.webp',
    headline:'',
    phone:'',
    nmls:'488509',
    buttonText:'View Rates',   
    awConversion:'AW-915627431/xjr5CMyPrrMDEKe7zbQD', 
    buttonUrl:'',
    dollarValue:0,
    phoneScript:function(){  
    },
    buttonScript:function(){
      let dVal=this.dollarValue;
      if(vObj.testMode){
        dVal=0;
      }      
      gtag('event', 'Unison Shared Equity Comparison Click', {
        'event_category' : 'Comparison Click',
        'event_label' : 'PPCID '+vObj.PPCID,
        'value' : dVal
      });
      if(this.awConversion!=undefined&&this.awConversion.length>0){
        gtag('event', 'conversion', {'send_to': this.awConversion});
      }    
      let url=`https:unisonpartners.go2cloud.org/aff_c?offer_id=20&aff_id=1011&aff_sub=${vObj.sPPCID}`;
      window.open(url,'_blank');
    },
    bullets:[
      "Unlock Up To $500,000 Of Your Home Equity",
      "No Monthly payment, Interest Or Debt",
      "Get Pre-Quallifed In 2 Minutes",
      "Free Instant Estimate",
    ],
    rating:'r5',
    stateHide:['ND','MD','OK','ID','HI','CT','RI','VT','TX','WY','MT','NE','SD','ME','MS','AR','GA','AK','IA','LA','NH','WV','AL','OR'],
    creditHide:[],
    purchTimeframe:['asap'],
     purposeHide:['purch', '']
  },
   {
      Hometap Shared Equity
     logo:'hometap.png',
     headline:'',
     phone:'',
     nmls:'',
     buttonText:'View Rates',   
     awConversion:'AW-915627431/xjr5CMyPrrMDEKe7zbQD', 
     buttonUrl:'',
     dollarValue:0,
     buttonScript:function(){
       let dVal=this.dollarValue;
       if(vObj.testMode){
         dVal=0;
       }      
       gtag('event', 'Hometap Shared Equity Comparison Click', {
         'event_category' : 'Comparison Click',
         'event_label' : 'PPCID '+vObj.PPCID,
         'value' : dVal
       });
       if(this.awConversion!=undefined&&this.awConversion.length>0){
         gtag('event', 'conversion', {'send_to': this.awConversion});
       }    
       let url=`http:hometap.go2cloud.org/aff_c?offer_id=1&aff_id=1154&aff_sub=${vObj.sPPCID}`;
       window.open(url,'_blank');
     },
     bullets:[
       "Get Up To $300,000 In Cash",
       "Prequalify In Less Than Two Minutes",
       "No Cash Due At Closing",
       "No Monthly Payments"
     ],
     rating:'r5',
     stateHide:['LA','CO','AK','WV','MT','ND','KS','IN','NM','NH','CT','KY','MO','DE','MS','TX','TN','AL','VT','WI','IA','AR','ID','IL','RI','HI','WY','SD','OK','ME','NE','GA'],
     creditHide:[],
   },
   {
      Point Shared Equity
     logo:'pointlogo.png',
     headline:'',
     phone:'',
     nmls:'',
     buttonText:'View Rates',   
     awConversion:'AW-915627431/cvqICPy7-98BEKe7zbQD', 
     buttonUrl:'',
     dollarValue:0,
     buttonScript:function(){
       let dVal=this.dollarValue;
       if(vObj.testMode){
         dVal=0;
       }      
       gtag('event', 'Point Shared Equity Comparison Click', {
         'event_category' : 'Comparison Click',
         'event_label' : 'PPCID '+vObj.PPCID,
         'value' : dVal
       });
       if(this.awConversion!=undefined&&this.awConversion.length>0){
         gtag('event', 'conversion', {'send_to': this.awConversion});
       }    
       let url=`https:welcome.point.com/peklavallc`;
       window.open(url,'_blank');
     },
     bullets:[
       "Get Up To $500,000 In Cash",
       "No Monthly Payments",
       "No Income Requirements",
       "No Need For Perfect Credit"
     ],
     rating:'r5',
     stateHide:['KS','AR','MT','CT','OK','TX','IN','HI','IA','WI','ME','TN','AL','GA','MS','AK','RI','KY','NV','SD','DE','ID','ND','NE','OH','UT','MO','NM','LA','WY','SC','VT','NH','WV'],
     creditHide:[],
   },
   {
      NAF Refinance
     logo:'NAF-new.png',
     headline:'',
     nmls:'6606',
     buttonText:'View Rates',    
     awConversion:'AW-915627431/xjr5CMyPrrMDEKe7zbQD',
     buttonUrl:'',
     dollarValue:0,
     buttonScript:function(){
       let dVal=this.dollarValue;
       if(vObj.testMode){
         dVal=0;
       }      
       gtag('event', 'NAF Refi Comparison Click', {
       'event_category' : 'Comparison Click',
       'event_label' : 'PPCID '+vObj.PPCID,
       'value' : dVal
       });
       if(this.awConversion!=undefined&&this.awConversion.length>0){
         gtag('event', 'conversion', {'send_to': this.awConversion});
       }    
       let url = "https:www.newamericanfunding.com/lfj/ratezip/?refinance=25328631&purchase=25328580&phone=8005520521&utm_source=RateZip.com&utm_medium=Display&utm_content=default&utm_campaign=Ratezip.com_CT_RQ_Pur&utm_term=default&loantype=&sub_id="+vObj.sPPCID+"&cs=&pub_id="+vObj.sPPCID;
       window.open(url,'_blank');
     },
     bullets:[
       "A+ BBB Rating, 219k+ Positive Reviews",
       "Access Your Home's Equity with a Cash-Out Refinance",
       "100% Online Mortgage Application"
     ],
     rating:'r45',
     stateHide:['KY','IN','NJ','NM','NV','VA','IL','DE','OH','UT','CA','MI','CO','NC','MA','AZ','PA','WI','WA','NY','MD','MN','MO','KS','FL','OR','TN','SC', 'HI'],
     loanHide:['<=100k'],
     creditHide:['POOR'],
      purposeHide:['', 'purch']
   },
  {
     Figure Shared Equity
    logo:'Figure-Logo-Purple2.png',
    headline:'',
    phone:'',
    nmls:'',
    buttonText:'View Rates',   
    awConversion:'AW-915627431/cvqICPy7-98BEKe7zbQD', 
    buttonUrl:'',
    dollarValue:10,
    phoneScript:function(){
      gtag('event', 'Amerisave 4972 Phone Click', {
        'event_category' : 'RZ 4972 comparison table phone',
        'event_label' : 'PPCID '+vObj.PPCID,
        'value' :''
      });   
    },
    buttonScript:function(){
      let dVal=this.dollarValue;
      if(vObj.testMode){
        dVal=0;
      }      
      gtag('event', 'Figure Shared Equity Comparison Click', {
        'event_category' : 'Comparison Click',
        'event_label' : 'PPCID '+vObj.PPCID,
        'value' : dVal
      });
      if(this.awConversion!=undefined&&this.awConversion.length>0){
        gtag('event', 'conversion', {'send_to': this.awConversion});
      }    
      let url = `https:figure-home-equity.pxf.io/c/81868/586292/8735?subId1=${vObj.sPPCID}&subId2=${vObj.PPCID}&partnerpropertyid=190140`;
      window.open(url,'_blank');
    },
    bullets:[
      'Fastest Way To Turn Home Equity Into Cash',
      "Flexible Terms, Redraw Up To 100%, Borrow Up To $400K",
      'Approval In 5 Minutes. Funding In As Few As 5 Days',
      "100% Digital App & Online Appraisal"
    ],
    rating:'r5',
    stateHide:['KY','IN','NJ','NM','NV','VA','IL','DE','OH','UT','CA','MI','CO','NC','MA','AZ','PA','WI','WA','NY','MD','MN','MO','KS','FL','OR','TN','SC','WV','TX','HI'],
     creditHide:['Poor'],
    purchTimeframe:['asap'],
     purposeHide:['purch', '', 'refi']
  },
  {
     Bankrate Shared Equity
    logo:'Bankrate.png',
    headline:'',
    phone:'',
    nmls:'1427381',
    buttonText:'View Rates',   
    awConversion:'AW-915627431/cvqICPy7-98BEKe7zbQD', 
    buttonUrl:'',
    dollarValue:0,
    phoneScript:function(){
      gtag('event', 'Amerisave 4972 Phone Click', {
        'event_category' : 'RZ 4972 comparison table phone',
        'event_label' : 'PPCID '+vObj.PPCID,
        'value' :''
      });   
    },
    buttonScript:function(){
      let dVal=this.dollarValue;
      if(vObj.testMode){
        dVal=0;
      }      
      gtag('event', 'Bankrate Shared Equity Comparison Click', {
        'event_category' : 'Comparison Click',
        'event_label' : 'PPCID '+vObj.PPCID,
        'value' : dVal
      });
      if(this.awConversion!=undefined&&this.awConversion.length>0){
        gtag('event', 'conversion', {'send_to': this.awConversion});
      }    
      let url=`https:www.myfinance.com/reporting/redir?redir=https%3A%2F%2Fwww.bankrate.com%2Fhome-equity%2Fheloc-rates%2F%3Fttcid%3D%7Bsub_id%7D%26pid%3Dmyfi_ratezip&utm_campaign=rz-heloc-link&sub_id=${vObj.sPPCID}`;
      window.open(url,'_blank');
    },
    bullets:[
      "Custom Home Equity & HELOC Quotes Online In Under 2 Minutes",
      'Connecting Over 800K People With Mortgage Lenders Each Year',
      'No Credit Checks Required To Get Quotes',
      'Shop Rates That Are Lower Than The National Average',
      "Get Accurate Quotes From Both Traditional And Digital Lenders"
    ],
    rating:'r5',
    stateHide:['KY','IN','NJ','NM','NV','VA','IL','DE','OH','UT','CA','MI','CO','NC','MA','AZ','PA','WI','WA','NY','MD','MN','MO','KS','FL','OR','TN','SC'],
    creditHide:[],
    purchTimeframe:['asap'],
     purposeHide:['refi', '', 'purch']
  },
  {
     Amerisave Refi
    logo:'amerisave.png',
    headline:'',
    nmls:'1168',
    buttonText:'View Rates',   
    awConversion:'AW-915627431/xjr5CMyPrrMDEKe7zbQD',
    dollarValue:0,
    rates:'amerisave',
    phone:'(833) 853-0338',
    phoneScript:function(){
      gtag('event', 'Amerisave 4972 Phone Click', {
        'event_category' : 'RZ 4972 comparison table phone',
        'event_label' : 'PPCID '+vObj.PPCID,
        'value' :''
      });   
    },
    buttonScript:function(){
      let dVal=this.dollarValue;
      if(vObj.testMode){
        dVal=0;
      }
      gtag('event', 'Amerisave Shared Equity Comparison Click', {
        'event_category' : 'Comparison Click',
        'event_label' : 'PPCID '+vObj.PPCID,
        'value' : dVal
      });   
      if(this.awConversion!=undefined&&this.awConversion.length>0){
        gtag('event', 'conversion', {'send_to': this.awConversion});
      }      
      let url='https:apply.amerisave.com/loan/ams-goal/?source=4972&utm_source=ratezip&LeadID='+vObj.sPPCID+'&RateZipID='+vObj.sPPCID;
      let url = 'https:apply.amerisave.com/loan/ams-goal/?source=11879&LeadID=7&utm_source=ratezip&RateZipID='+vObj.sPPCID;
      window.open(url,'_blank');
    },
    bullets:[
      'Low Cashout Refinance Rates',
      'Get A Custom Quote In Minutes',
      'Fast Prequalification With No Hard Credit Pull',
       'An online mortgage lender with a national presence, easy-to-use platform with rate lock request.',
       'Licensed Loan Originators are available via phone, email or chat.',
       '49 states and DC (not licensed in NY).',
       'Their prequalification process only takes a few minutes.',
      "Read more about <a href='https:www.ratezip.com/lender-reviews/amerisave-mortgage-rates/' target='_blank'>AmeriSave</a>."
    ],
    rating:'r45',
    stateHide:['KY','IN','NJ','NM','NV','VA','IL','DE','OH','UT','CA','MI','CO','NC','MA','AZ','PA','WI','WA','NY','MD','MN','MO','KS','FL','OR','TN','SC'],
    creditHide:[],
     purposeHide:['purch','']
  },
  {
     QL Refi
    logo:'quicken-loans.svg',
    headline:'',
    phone:'',
    nmls:'3030',
    buttonText:'View Rates',   
    awConversion:'AW-915627431/xjr5CMyPrrMDEKe7zbQD', 
    buttonUrl:'',
    dollarValue:0,
    phoneScript:function(){
      gtag('event', 'Amerisave 4972 Phone Click', {
        'event_category' : 'RZ 4972 comparison table phone',
        'event_label' : 'PPCID '+vObj.PPCID,
        'value' :''
      });   
    },
    buttonScript:function(){
      let dVal=this.dollarValue;
      if(vObj.testMode){
        dVal=0;
      }      
      gtag('event', 'QuickenLoans Shared Equity Comparison Click', {
        'event_category' : 'Comparison Click',
        'event_label' : 'PPCID '+vObj.PPCID,
        'value' : dVal
      });
      if(this.awConversion!=undefined&&this.awConversion.length>0){
        gtag('event', 'conversion', {'send_to': this.awConversion});
      }    
      let url="https:www.quickenloans.com/l2/wham?qls=PEK_affqlxxx.refinancex&aff_sub="+vObj.PPCID;
      let url=`https:trackaffcdm.com/?E=wRLCd4ZeTE1bzicxewrHkw%3d%3d&s1=comp_table&s3=${vObj.sPPCID}`;
      window.open(url,'_blank');
    },
    bullets:[
      'Quicken Loans is a large, well-known, national brand.',
      'They offer new, innovative and useful technologies for consumers to use.',
      'Has national presence with customer support 7 days per week.',
      "Read more about <a href='https:www.ratezip.com/lender-reviews/quicken-loans/' target='_blank'>Quicken Loans</a>."
    ],
    rating:'r5',
    stateHide:['KY','IN','NJ','NM','NV','VA','IL','DE','OH','UT','CA','MI','CO','NC','MA','AZ','PA','WI','WA','MD','MN','MO','KS','FL','OR','TN','SC'],
    creditHide:[],
    purchTimeframe:['asap'],
     purposeHide:['purch', '']
  },
  ];