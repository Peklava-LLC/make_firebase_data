let flowPageData = [
    {
      comment__ : "Bankrate Home Equity",
      logo: "Bankrate.png",
      headline: "",
      phone: "",
      nmls: "1427381",
      buttonText: "View Rates",
      awConversion:'AW-915627431/cvqICPy7-98BEKe7zbQD',
      buttonUrl: "",
      dollarValue: 0,
      phoneScript: "",
      buttonScript: "",
      bullets: [
        "Custom Home Equity & HELOC Quotes Online In Under 2 Minutes",
        "Connecting Over 800K People With Mortgage Lenders Each Year",
        "No Credit Checks Required To Get Quotes",
        "Shop Rates That Are Lower Than The National Average",
        "Get Accurate Quotes From Both Traditional And Digital Lenders",
      ],
      rating: "r5",
      stateHide: ["NY", "AK", "HI", "MS"],
      creditHide: [],
      purchTimeframe:['asap'],
      purposeHide: ["refi", "", "purch"],
      link: "https:www.myfinance.com/reporting/redir?redir=https%3A%2F%2Fwww.bankrate.com%2Fhome-equity%2Fheloc-rates%2F%3Fttcid%3D%7Bsub_id%7D%26pid%3Dmyfi_ratezip&utm_campaign=rz-heloc-link&sub_id=sPPCID",
      hideCard: false,
      order: 0
    },
    {
      __comment__ : "Figure HELOC",
      logo: "Figure-Logo-Purple2.png",
      headline: "",
      phone: "",
      nmls: "",
      buttonText: "View Rates",
      awConversion:'AW-915627431/cvqICPy7-98BEKe7zbQD',
      buttonUrl: "",
      dollarValue: 10,
      phoneScript: function () {
        gtag("event", "Amerisave 4972 Phone Click", {
          event_category: "RZ 4972 comparison table phone",
          event_label: "PPCID " + vObj.PPCID,
          value: "",
        });
      },
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "Figure Home Equity Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url = `https:figure-home-equity.pxf.io/c/81868/586292/8735?subId1=${vObj.sPPCID}&subId2=${vObj.PPCID}&partnerpropertyid=190140`;
        window.open(url, "_blank");
      },
      bullets: [
        "Fastest Way To Turn Home Equity Into Cash",
        "Flexible Terms, Redraw Up To 100%, Borrow Up To $400K",
        "Approval In 5 Minutes. Funding In As Few As 5 Days",
        "100% Digital App & Online Appraisal",
      ],
      rating: "r5",
      stateHide: ["WV", "NY", "TX", "HI", "UT", "KY", "MD", "DE", "SC"],
      creditHide: ["Poor"],
      purchTimeframe:['asap'],
      purposeHide: ["purch", "", "refi"],
    },
    {
        __comment__ : "Unison Home Equity",
      logo: "unison.webp",
      headline: "",
      phone: "",
      nmls: "488509",
      buttonText: "View Rates",
      awConversion:'AW-915627431/cvqICPy7-98BEKe7zbQD',
      buttonUrl: "",
      dollarValue: 0,
      phoneScript: function () {},
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "Unison Home Equity Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url = `https:unisonpartners.go2cloud.org/aff_c?offer_id=20&aff_id=1011&aff_sub=${vObj.sPPCID}`;
        window.open(url, "_blank");
      },
      bullets: [
        "Unlock Up To $500,000 Of Your Home Equity",
        "No Monthly payment, Interest Or Debt",
        "Get Pre-Quallifed In 2 Minutes",
        "Free Instant Estimate",
      ],
      rating: "r5",
      stateHide: [
        "ND",
        "MD",
        "OK",
        "ID",
        "HI",
        "CT",
        "RI",
        "VT",
        "TX",
        "WY",
        "MT",
        "NE",
        "SD",
        "ME",
        "MS",
        "AR",
        "GA",
        "AK",
        "IA",
        "LA",
        "NH",
        "WV",
        "AL",
        "OR",
      ],
      creditHide: [],
      purchTimeframe:['asap'],
      purposeHide: ["purch", "refi", ""],
    },
     {
        __comment__ : "NAF Purchase",
       logo:'NAF-new.png',
       headline:'',
       nmls:'6606',
       buttonText:'View Rates',
       awConversion:'AW-915627431/yMmgCLDIyJUDEKe7zbQD',
       buttonUrl:'',
       dollarValue:0,
       buttonScript:function(){
         let dVal=this.dollarValue;
         if(vObj.testMode){
           dVal=0;
         }
         gtag('event', 'NAF Purchase Comparison Click', {
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
       stateHide:['NY', 'HI'],
       loanHide:['<=100k'],
       creditHide:['POOR'],
       purposeHide:['refi', 'homeeq']
     },
     {
        __comment__ : "NAF Refinance",
       logo:'NAF-new.png',
       headline:'',
       nmls:'6606',
       buttonText:'View Rates',
       awConversion:'AW-915627431/yMmgCLDIyJUDEKe7zbQD',
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
       stateHide:['NY', 'HI'],
       loanHide:['<=100k'],
       creditHide:['POOR'],
       purposeHide:['', 'purch']
     },
    {
        __comment__ :  "QL Home Equity",
      logo: "quicken-loans.svg",
      headline: "",
      phone: "",
      nmls: "3030",
      buttonText: "View Rates",
      awConversion: "AW-915627431/cvqICPy7-98BEKe7zbQD",
      buttonUrl: "",
      dollarValue: 0,
      phoneScript: function () {
        gtag("event", "Amerisave 4972 Phone Click", {
          event_category: "RZ 4972 comparison table phone",
          event_label: "PPCID " + vObj.PPCID,
          value: "",
        });
      },
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "QuickenLoans Home Equity Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url="https:www.quickenloans.com/l2/wham?qls=PEK_affqlxxx.refinancex&aff_sub="+vObj.PPCID;
        let url = `https:trackaffcdm.com/?E=wRLCd4ZeTE1bzicxewrHkw%3d%3d&s1=comp_table&s3=${vObj.sPPCID}`;
        window.open(url, "_blank");
      },
      bullets: [
        "Large, Well-Known, National Brand.",
        "Wide Range Of Loan Options.",
        "Customer Support 7 Days Per Week.",
        "Read more about <a href='https:www.ratezip.com/lender-reviews/quicken-loans/' target='_blank'>Quicken Loans</a>.",
      ],
      rating: "r5",
      stateHide: [],
      creditHide: [],
      purchTimeframe:['asap'],
      purposeHide: ["purch", "", "refi"],
    },
    {
        __comment__ : "QL Refi",
      logo: "quicken-loans.svg",
      headline: "",
      phone: "",
      nmls: "3030",
      buttonText: "View Rates",
      awConversion: "AW-915627431/cvqICPy7-98BEKe7zbQD",
      buttonUrl: "",
      dollarValue: 0,
      phoneScript: function () {
        gtag("event", "Amerisave 4972 Phone Click", {
          event_category: "RZ 4972 comparison table phone",
          event_label: "PPCID " + vObj.PPCID,
          value: "",
        });
      },
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "QuickenLoans Refi Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url="https:www.quickenloans.com/l2/wham?qls=PEK_affqlxxx.refinancex&aff_sub="+vObj.PPCID;
        let url = `https:trackaffcdm.com/?E=wRLCd4ZeTE1bzicxewrHkw%3d%3d&s1=comp_table&s3=${vObj.sPPCID}`;
        window.open(url, "_blank");
      },
      bullets: [
        "Large, Well-Known, National Brand.",
        "Wide Range Of Loan Options.",
        "National Presence With Customer Support 7 Days Per Week.",
        "Read more about <a href='https:www.ratezip.com/lender-reviews/quicken-loans/' target='_blank'>Quicken Loans</a>.",
      ],
      rating: "r5",
      stateHide: [],
      creditHide: [],
      purchTimeframe:['asap'],
      purposeHide: ["purch", "", "homeeq"],
    },
    {
        __comment__ :  "Amerisave Purchase",
      logo: "amerisave.png",
      headline: "",
      nmls: "1168",
      buttonText: "View Rates",
      awConversion: "AW-915627431/IjWKCPr6798BEKe7zbQD",
      dollarValue: 0,
      rates: "amerisave",
      phone: "(833) 853-0338",
      phoneScript: function () {
        gtag("event", "Amerisave 4972 Phone Click", {
          event_category: "RZ 4972 comparison table phone",
          event_label: "PPCID " + vObj.PPCID,
          value: "",
        });
      },
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "Amerisave Purchase Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url='https:apply.amerisave.com/loan/ams-goal/?source=4972&utm_source=ratezip&LeadID='+vObj.sPPCID+'&RateZipID='+vObj.sPPCID;
        let url =
          "https:apply.amerisave.com/loan/ams-goal/?source=11879&LeadID=7&utm_source=ratezip&RateZipID=" +
          vObj.sPPCID;
        window.open(url, "_blank");
      },
      bullets: [
        "An online mortgage lender with a national presence, easy-to-use platform with rate lock request.",
        "Licensed Loan Originators are available via phone, email or chat.",
        "49 states and DC (not licensed in NY).",
        "Their prequalification process only takes a few minutes.",
        "Read more about <a href='https:www.ratezip.com/lender-reviews/amerisave-mortgage-rates/' target='_blank'>AmeriSave</a>.",
      ],
      rating: "r45",
      stateHide: ["NY"],
      creditHide: [],
      purposeHide: ["refi", "homeeq", ""],
    },
    {
        __comment__ :  "Hometap Home Equity",
      logo: "hometap.png",
      headline: "",
      phone: "",
      nmls: "",
      buttonText: "View Rates",
      awConversion:'AW-915627431/cvqICPy7-98BEKe7zbQD',
      buttonUrl: "",
      dollarValue: 0,
      phoneScript: function () {
        gtag("event", "Amerisave 4972 Phone Click", {
          event_category: "RZ 4972 comparison table phone",
          event_label: "PPCID " + vObj.PPCID,
          value: "",
        });
      },
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "Hometap Home Equity Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url=`https:cdmtrk.com/?E=djPU3Wg4B%2fD3QGt84fQN9Q%3d%3d&s1=comp_table&s3=${vObj.sPPCID}`;
        let url = `http:hometap.go2cloud.org/aff_c?offer_id=1&aff_id=1154&aff_sub=${vObj.sPPCID}`;
        window.open(url, "_blank");
      },
      bullets: [
        "Get Up To $300,000 In Cash",
        "Prequalify In Less Than Two Minutes",
        "No Cash Due At Closing",
        "No Monthly Payments",
      ],
      rating: "r5",
      stateHide: [
        "LA",
        "UT",
        "CO",
        "AK",
        "WV",
        "MT",
        "ND",
        "KS",
        "IN",
        "NM",
        "NH",
        "CT",
        "KY",
        "MO",
        "DE",
        "NV",
        "SC",
        "MS",
        "TX",
        "TN",
        "AL",
        "VT",
        "WI",
        "IA",
        "AR",
        "ID",
        "IL",
        "RI",
        "HI",
        "WY",
        "SD",
        "OK",
        "ME",
        "NE",
        "GA",
      ],
      creditHide: [],
      purchTimeframe:['asap'],
      purposeHide: ["purch", "", "refi"],
    },
    {
        __comment__ :  "Amerisave Home Equity",
      logo: "amerisave.png",
      headline: "",
      nmls: "1168",
      buttonText: "View Rates",
      awConversion: "AW-915627431/IjWKCPr6798BEKe7zbQD",
      dollarValue: 0,
      rates: "amerisave",
      phone: "(833) 853-0338",
      phoneScript: function () {
        gtag("event", "Amerisave 4972 Phone Click", {
          event_category: "RZ 4972 comparison table phone",
          event_label: "PPCID " + vObj.PPCID,
          value: "",
        });
      },
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "Amerisave Home Equity Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url='https:apply.amerisave.com/loan/ams-goal/?source=4972&utm_source=ratezip&LeadID='+vObj.sPPCID+'&RateZipID='+vObj.sPPCID;
        let url =
          "https:apply.amerisave.com/loan/ams-goal/?source=11879&LeadID=7&utm_source=ratezip&RateZipID=" +
          vObj.sPPCID;
        window.open(url, "_blank");
      },
      bullets: [
        "Prequalification Process Takes Just Minutes.",
        "Online Mortgage Lender With A National Presence.",
        "Licensed Loan Originators Available Via Phone, Email Or Chat.",
        "49 states and DC (not licensed in NY).",
        "Read more about <a href='https:www.ratezip.com/lender-reviews/amerisave-mortgage-rates/' target='_blank'>AmeriSave</a>.",
      ],
      rating: "r45",
      stateHide: ["NY"],
      creditHide: [],
      purposeHide: ["purch", "", "refi"],
    },
    {
        __comment__ :  "Amerisave Refi",
      logo: "amerisave.png",
      headline: "",
      nmls: "1168",
      buttonText: "View Rates",
      awConversion: "AW-915627431/IjWKCPr6798BEKe7zbQD",
      dollarValue: 0,
      rates: "amerisave",
      phone: "(833) 853-0338",
      phoneScript: function () {
        gtag("event", "Amerisave 4972 Phone Click", {
          event_category: "RZ 4972 comparison table phone",
          event_label: "PPCID " + vObj.PPCID,
          value: "",
        });
      },
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "Amerisave Refinance Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url='https:apply.amerisave.com/loan/ams-goal/?source=4972&utm_source=ratezip&LeadID='+vObj.sPPCID+'&RateZipID='+vObj.sPPCID;
        let url =
          "https:apply.amerisave.com/loan/ams-goal/?source=11879&LeadID=7&utm_source=ratezip&RateZipID=" +
          vObj.sPPCID;
        window.open(url, "_blank");
      },
      bullets: [
        "An online mortgage lender with a national presence, easy-to-use platform with rate lock request.",
        "Licensed Loan Originators are available via phone, email or chat.",
        "49 states and DC (not licensed in NY).",
        "Their prequalification process only takes a few minutes.",
        "Read more about <a href='https:www.ratezip.com/lender-reviews/amerisave-mortgage-rates/' target='_blank'>AmeriSave</a>.",
      ],
      rating: "r45",
      stateHide: ["NY"],
      creditHide: [],
      purposeHide: ["purch", "", "homeeq"],
    },
    {
        __comment__ :  "QL Purchase"
      logo: "quicken-loans.svg",
      headline: "",
      phone: "",
      nmls: "3030",
      buttonText: "View Rates",
      awConversion: "AW-915627431/cvqICPy7-98BEKe7zbQD",
      buttonUrl: "",
      dollarValue: 0,
      phoneScript: function () {
        gtag("event", "Amerisave 4972 Phone Click", {
          event_category: "RZ 4972 comparison table phone",
          event_label: "PPCID " + vObj.PPCID,
          value: "",
        });
      },
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "QuickenLoans Purchase Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url="https:www.quickenloans.com/l2/wham?qls=PEK_affqlxxx.refinancex&aff_sub="+vObj.PPCID;
        let url = `https:cdmtrk.com/?E=djPU3Wg4B%2fD3QGt84fQN9Q%3d%3d&s1=comp_table&s3=${vObj.sPPCID}`;
        window.open(url, "_blank");
      },
      bullets: [
        "Quicken Loans is a large, well-known, national brand.",
        "They offer new, innovative and useful technologies for consumers to use.",
        "Has national presence with customer support 7 days per week.",
        "Read more about <a href='https:www.ratezip.com/lender-reviews/quicken-loans/' target='_blank'>Quicken Loans</a>.",
      ],
      rating: "r5",
      stateHide: [],
      creditHide: [],
      purchTimeframe:['asap'],
      purposeHide: ["refi", "", "homeeq"],
    },
    {
        __comment__ :  "Bankrate Purchase",
      logo: "Bankrate.png",
      headline: "",
      phone: "",
      nmls: "1427381",
      buttonText: "View Rates",
      awConversion:'AW-915627431/cvqICPy7-98BEKe7zbQD',
      buttonUrl: "",
      dollarValue: 0,
      phoneScript: function () {
        gtag("event", "Amerisave 4972 Phone Click", {
          event_category: "RZ 4972 comparison table phone",
          event_label: "PPCID " + vObj.PPCID,
          value: "",
        });
      },
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "Bankrate Purchase Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url=`https:cdmtrk.com/?E=djPU3Wg4B%2fD3QGt84fQN9Q%3d%3d&s1=comp_table&s3=${vObj.sPPCID}`;
        let url = `https:www.myfinance.com/reporting/redir?redir=https%3A%2F%2Fhomeloans.bankrate.com%2F%3Fttcid%3D%7Bsub_id%7D%26pid%3Dmyfi_ratezip_mtg&utm_campaign=ratezip-mtgpurch-link&sub_id=${vObj.sPPCID}`;
        window.open(url, "_blank");
      },
      bullets: [
        "Connecting Over 800,000 People With Mortgage Lenders Each Year",
        "Get Custom Mortgage Quotes Online In Under 2 Minutes",
        "No Credit Checks Required To Get Quotes",
        "Shop Rates That Are Lower Than The National Average",
        "Get Accurate Quotes From Both Traditional And Digital Lenders",
      ],
      rating: "r5",
      stateHide: ["NY", "AK", "HI", "MS"],
      creditHide: [],
      purchTimeframe:['asap'],
      purposeHide: ["refi", "", "homeeq"],
    },
    {
        __comment__ :  "Unison Refinance",
      logo: "unison.webp",
      headline: "",
      phone: "",
      nmls: "488509",
      buttonText: "View Rates",
      awConversion:'AW-915627431/cvqICPy7-98BEKe7zbQD',
      buttonUrl: "",
      dollarValue: 0,
      phoneScript: function () {},
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "Unison Refinance Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url = `https:unisonpartners.go2cloud.org/aff_c?offer_id=20&aff_id=1011&aff_sub=${vObj.sPPCID}`;
        window.open(url, "_blank");
      },
      bullets: [
        "Unlock Up To $500,000 Of Your Home Equity",
        "No Monthly payment, Interest Or Debt",
        "Get Pre-Quallifed In 2 Minutes",
        "Free Instant Estimate",
      ],
      rating: "r5",
      stateHide: [
        "ND",
        "MD",
        "OK",
        "ID",
        "HI",
        "CT",
        "RI",
        "VT",
        "TX",
        "WY",
        "MT",
        "NE",
        "SD",
        "ME",
        "MS",
        "AR",
        "GA",
        "AK",
        "IA",
        "LA",
        "NH",
        "WV",
        "AL",
        "OR",
      ],
      creditHide: [],
      purchTimeframe:['asap'],
      purposeHide: ["purch", "homeeq", ""],
    },
    {
        __comment__ :  "Bankrate Refi",
      logo: "Bankrate.png",
      headline: "",
      phone: "",
      nmls: "1427381",
      buttonText: "View Rates",
      awConversion:'AW-915627431/cvqICPy7-98BEKe7zbQD',
      buttonUrl: "",
      dollarValue: 0,
      phoneScript: function () {
        gtag("event", "Amerisave 4972 Phone Click", {
          event_category: "RZ 4972 comparison table phone",
          event_label: "PPCID " + vObj.PPCID,
          value: "",
        });
      },
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "Bankrate Refinance Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url=`https:cdmtrk.com/?E=djPU3Wg4B%2fD3QGt84fQN9Q%3d%3d&s1=comp_table&s3=${vObj.sPPCID}`;
        let url = `https:www.myfinance.com/reporting/redir?redir=https%3A%2F%2Fhomeloans.bankrate.com%2F%3Fttcid%3D%7Bsub_id%7D%26pid%3Dmyfi_ratezip_mtg&utm_campaign=ratezip-mtgrefi-link&sub_id=${vObj.sPPCID}`;
        window.open(url, "_blank");
      },
      bullets: [
        "Connecting Over 800,000 People With Mortgage Lenders Each Year",
        "Get Custom Mortgage Quotes Online In Under 2 Minutes",
        "No Credit Checks Required To Get Quotes",
        "Shop Rates That Are Lower Than The National Average",
        "Get Accurate Quotes From Both Traditional And Digital Lenders",
      ],
      rating: "r5",
      stateHide: ["NY", "AK", "HI", "MS"],
      creditHide: [],
      purchTimeframe:['asap'],
      purposeHide: ["purch", "", "homeeq"],
    },
     {
       logo:'credible.png',
       headline:'',
       nmls:'1681276',
       buttonText:'View Rates',
       awConversion:'AW-915627431/k-0YCL_BzvYBEKe7zbQD',
       buttonUrl:'',
       dollarValue:0,
       buttonScript:function(){
         let dVal=this.dollarValue;
         if(vObj.testMode){
           dVal=0;
         }
         gtag('event', 'Credible Comparison Click', {
           'event_category' : 'Comparison Click',
           'event_label' : 'PPCID '+vObj.PPCID,
           'value' : dVal
         });
         if(this.awConversion!=undefined&&this.awConversion.length>0){
           gtag('event', 'conversion', {'send_to': this.awConversion});
         }
         let url='https:www.credible.com/mortgage-refinance/?utm_source=PKLV&utm_medium=referral&utm_campaign=mortgage_refi&utm_content='+vObj.sPPCID;
         window.open(url,'_blank');
       },
       bullets:[
         'Actual rates from multiple lenders in 3 minutes',
         'Automated document collection process',
         "Dedicated mortgage support team who's always on your side",
         'NMLS #1681276, not available in NV, NY, UT, and WA'
       ],
       rating:'r45',
       stateHide:['NY','NV','UT','WA'],
       creditHide:[],
       purposeHide:['purch','']
     },
     {
       headline:'Mortgage Program for Members',
       subheadline: 'CostcoHomeFinance.com',
       nmls: '',
       logo: 'whp.jpg',
       buttonText:'Continue',
       awConversion:'AW-915627431/Xo8iCI21spQDEKe7zbQD',
       dollarValue:0,
       phone:'',
       phoneScript:function(){
         gtag('event', 'CHF Comparison Click', {
           'event_category' : 'Comparison Click',
           'event_label' : 'PPCID '+vObj.PPCID,
           'value' :''
         });
       },
       buttonScript:function(){
         let dVal=this.dollarValue;
         if(vObj.testMode){
           dVal=0;
         }
         gtag('event', 'CHF Comparison Click', {
           'event_category' : 'Comparison Click',
           'event_label' : 'PPCID '+vObj.PPCID,
           'value' : dVal
         });
         if(this.awConversion!=undefined&&this.awConversion.length>0){
           gtag('event', 'conversion', {'send_to': this.awConversion});
         }
         let url='https:costcohomefinance.com/getrates/?PPCID='+vObj.PPCID+'&CID=comparison21&MID='+vObj.sPPCID;;
         window.open(url,'_blank');
       },
       bullets:[
         'Shop Mortgage Lenders Quickly and Easily',
         'Purchase, Refinance, VA, Jumbo, Cash-out loans, and more. Buying a home doesn\'t have to be stressful.',
         'Capped Lender Fees. Great Customer Service. Competitive Rates.',
       ],
       rating:'r45',
       stateHide:['NY', 'WA'],
       creditHide:[],
       purposeHide:['refi', '', 'homeeq']
     },
     {
       logo:'zillow-home-loans.jpg',
       headline:'',
       phone:'',
       nmls:'10287',
       buttonText:'View Rates',
       awConversion:'AW-915627431/qptUCNec1Z0CEKe7zbQD',
       buttonUrl:'',
       dollarValue:6,
       buttonScript:function(){
         let dVal=this.dollarValue;
         if(vObj.testMode){
           dVal=0;
         }
         gtag('event', 'Zillow Comparison Click', {
           'event_category' : 'Comparison Click',
           'event_label' : 'PPCID '+vObj.PPCID,
           'value' : dVal
         });
         if(this.awConversion!=undefined&&this.awConversion.length>0){
           gtag('event', 'conversion', {'send_to': this.awConversion});
         }
         let url='https:t.pxtrkng.com/aff_ad?campaign_id=464&aff_id=11179&hostNameId=21698&aff_sub='+vObj.PPCID+'&aff_sub2='+vObj.sPPCID;
         window.open(url,'_blank');
       },
       vetBoost:0,
       bullets:[
         'Competitive refinance rates and fees',
         'Experienced loan officers',
         'Fast and easy process',
         'Low down payment options and many loan types to meet your unique needs',
       ],
       rating:'r45',
       stateHide:['HI', 'ME', 'NJ', 'NY', 'UT', 'VT', 'WV'],
       loanHide:['<=100k'],
       creditHide:['POOR'],
       purposeHide:['purch', ''],
       refiPos:1
     },
     {
       logo:'veterans-united.png',
       headline:'',
       phone:'',
       nmls:'2289',
       buttonText:'View Rates',
       buttonWarning:'Veterans and Active Military Only',
       awConversion:'',
       buttonUrl:'',
       dollarValue:0,
       purposeHide:['', 'refi', 'homeeq'],
       buttonScript:function(){
         let dVal=this.dollarValue;
         if(vObj.testMode){
           dVal=0;
         }
         gtag('event', 'Veterans United Popup Click', {
           'event_category' : 'Comparison Click',
           'event_label' : 'PPCID '+vObj.PPCID,
           'value' : dVal
         });
          if(this.awConversion!=undefined&&this.awConversion.length>0){
            gtag('event', 'conversion', {'send_to': this.awConversion});
          }
          let url='https:ad.doubleclick.net/ddm/trackclk/N7384.3731481RATEZIP/B23523812.322901680;dc_trk_aid=515186703;dc_trk_cid=162862984;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;utm_term='+vObj.sPPCID;
         let url = 'https:veteransunited.com';
         window.open(url,'_blank');
         vObj.showVUSpeedbump = true;
         this.purposeHide.push('');
         this.purposeHide.push('refi');
         this.purposeHide.push('purch');
       },
       vetBoost:0,
       bullets:[
         'Branches in 18 states, and offers services in all 50 states.',
         'Manage your home financing journey from anywhere with their digital mortgage experience.',
         '24/7 customer service.',
         '98% of Veterans & Military Family customers recommend Veterans United.',
         "Read more about <a href='https:www.ratezip.com/lender-reviews/veterans-united/' target='_blank'>Veterans United</a>."
       ],
       rating:'r45',
       stateHide:['NY'],
       creditHide:[],
       refiPos:1
     },
    {
      logo: "lendingtree.png",
      headline: "",
      nmls: "1136",
      buttonText: "View Rates",
      awConversion: "AW-915627431/5zj2CJf7jOABEKe7zbQD",
      buttonUrl: "",
      dollarValue: 0,
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "LendingTree Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
         rzConversion();
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url =
          "https:ck.lendingtree.com/?a=64&c=3810&s1=" +
          vObj.sPPCID +
          "&s2=&ccreative=rz&s3=" +
          vObj.sPPCID;
        window.open(url, "_blank");
      },
      bullets: [
        "Compare rates from multiple lenders.",
        "Free credit score check.",
        "Offers options to search for home loans, personal loans, credit cards, insurance, debt relief, and student loans.",
        "We were impressed by their free credit score service, which allows you to check and monitor your credit score without affecting it. They also give tips to improve your score.",
      ],
      rating: "r45",
      stateHide: [
        "AL",
        "AK",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "DC",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "PR",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY",
      ],
      creditHide: [],
      purposeHide: ["refi", "homeeq"],
    },
    {
      logo: "lendingtree.png",
      headline: "",
      nmls: "1136",
      buttonText: "View Rates",
      awConversion: "AW-915627431/5zj2CJf7jOABEKe7zbQD",
      buttonUrl: "",
      dollarValue: 0,
      buttonScript: function () {
        let dVal = this.dollarValue;
        if (vObj.testMode) {
          dVal = 0;
        }
        gtag("event", "LendingTree Home Equity Comparison Click", {
          event_category: "Comparison Click",
          event_label: "PPCID " + vObj.PPCID,
          value: dVal,
        });
         rzConversion();
        if (this.awConversion != undefined && this.awConversion.length > 0) {
          gtag("event", "conversion", { send_to: this.awConversion });
        }
        let url =
          "https:ck.lendingtree.com/?a=64&c=3810&s1=" +
          vObj.sPPCID +
          "&s2=&ccreative=rz&s3=" +
          vObj.sPPCID;
        window.open(url, "_blank");
      },
      bullets: [
        "Compare Home Equity Rates From Multiple Lenders",
        "Free Credit Score Check",
        "Personalized Mortgage Rates Fast",
        "Cash-Out Refinance Available",
      ],
      rating: "r45",
      stateHide: [],
      creditHide: [],
      purposeHide: ["", "purch", "refi"],
    },
     {
       logo:'loandepot.png',
       headline:'',
       nmls:'174457 ',
       buttonText:'View Rates',
       awConversion:'AW-915627431/gkAGCPWkquEBEKe7zbQD',
       buttonUrl:'',
       dollarValue:0,
       buttonScript:function(){
         let dVal=this.dollarValue;
         if(vObj.testMode){
           dVal=0;
         }
         gtag('event', 'LoanDepot Comparison Click', {
           'event_category' : 'Comparison Click',
           'event_label' : 'PPCID '+vObj.PPCID,
           'value' : dVal
         });
         if(this.awConversion!=undefined&&this.awConversion.length>0){
           gtag('event', 'conversion', {'send_to': this.awConversion});
         }
         let url='https:t.pxtrkng.com/aff_ad?campaign_id=456&aff_id=10941&aff_sub='+vObj.PPCID+'&aff_sub2='+vObj.sPPCID;
         window.open(url,'_blank');
       },
       bullets:[
         'Abundant offers and special programs.',
         'Offers fixed rate mortgages, ARMs, FHA Loans, Jumbo Loans, VA Loans and more.',
         "Provides a unique \"Lifetime Guarantee\" for their mortgages. If a consumer closes on a mortgage with them for the first time, their lender fees will be waived and appraisal fees will be reimbursed for any future refinances with loanDepot.",
         "Read more about <a href='https:www.ratezip.com/lender-reviews/loan-depot/' target='_blank'>Loan Depot</a>.",
         "Read more about LoanDepot's <a href='https:www.loandepot.com/our-rate-guarantee' target='_blank'>Lifetime Guarantee</a>."
       ],
       rating:'r45',
       stateHide:['NY'],
       creditHide:[],
       purposeHide:[],
     },
     {
       logo:'fairway.jpg',
       headline:'',
       nmls:'2289',
       buttonText:'View Rates',
       awConversion:'AW-915627431/KBGHCOroo_UBEKe7zbQD',
       buttonUrl:'',
       dollarValue:0,
       buttonScript:function(){
         let dVal=this.dollarValue;
         if(vObj.testMode){
           dVal=0;
         }
         gtag('event', 'Fairway Comparison Click', {
         'event_category' : 'Comparison Click',
         'event_label' : 'PPCID '+vObj.PPCID,
         'value' : dVal
         });
         if(this.awConversion!=undefined&&this.awConversion.length>0){
           gtag('event', 'conversion', {'send_to': this.awConversion});
         }
         let url="https:app.home.com/mortgage-loan/?utm_source=peklava&utm_medium=affiliate&utm_campaign=any_us_anycity_fwl&utm_term=mortgage&utm_content=rate_zip&subid="+vObj.sPPCID;
         window.open(url,'_blank');
       },
       bullets:[
         'Available in all 50 states and has a variety of loan options, including conventional, jumbo, first time home buyer programs, FHA and VA programs.',
         'Mortgage options for those seeking a smaller downpayment and Creditool, their free credit score improvement plan.',
         "Read more about <a href='https:www.ratezip.com/lender-reviews/fairway-independent-mortgage-corporation/' target='_blank'>Fairway Independent Mortgage Corporation</a>."
       ],
       rating:'r45',
       stateHide:[],
       creditHide:[],
       purposeHide:['refi', 'purch', '']
     },
     {
       logo:'weslend_logo.png',
       headline:'',
       nmls:'3304',
       buttonText:'View Rates',
       awConversion:'',
       buttonUrl:'',
       dollarValue:0,
       buttonScript:function(){
         let dVal=this.dollarValue;
         if(vObj.testMode){
           dVal=0;
         }
         gtag('event', 'Weslend / Lenox Comparison Click', {
           'event_category' : 'Comparison Click',
           'event_label' : 'PPCID '+vObj.PPCID,
           'value' : dVal
         });
         if(this.awConversion!=undefined&&this.awConversion.length>0){
           gtag('event', 'conversion', {'send_to': this.awConversion});
         }
         let url='https:www.lenoxhomeloans.com/lead-forms-v2/get-mortgage?campaignid=11696&phone=8888524030&utm_source=ratezip&utm_medium=display&utm_content=default&utm_campaign=ratezip_refi&sub_id='+vObj.sPPCID+'&utm_term=default';
         window.open(url,'_blank');
       },
       bullets:[
         'No Closing Costs, No Fees',
         'Low Interest Rates',
         'Get Your Personalized Rate Quote in Minutes',
         'Conventional, Jumbo, Fixed, ARM, FHA, VA, Non-QM',
         'Cash Out, Pay Off Credit Cards, Pay College Tuition',
         '100% Online Mortgage Loan Application Available',
         '20+ Years in business'
       ],
       rating:'r45',
       stateHide:['CA', 'MS', 'DE', 'NY', 'LA', 'WY', 'VT', 'GA', 'OR', 'DC', 'WA', 'WV', 'AK', 'SD', 'NE', 'ND', 'SC', 'WI'],
       creditHide:['POOR'],
       purposeHide:['purch','', 'refi']
     },
     {
       logo:'lenox_logo.png',
       headline:'',
       nmls:'3304',
       buttonText:'View Rates',
       awConversion:'',
       buttonUrl:'',
       dollarValue:0,
       buttonScript:function(){
         let dVal=this.dollarValue;
         if(vObj.testMode){
           dVal=0;
         }
         gtag('event', 'Weslend / Lenox Comparison Click', {
           'event_category' : 'Comparison Click',
           'event_label' : 'PPCID '+vObj.PPCID,
           'value' : dVal
         });
         if(this.awConversion!=undefined&&this.awConversion.length>0){
           gtag('event', 'conversion', {'send_to': this.awConversion});
         }
         let url='https:www.lenoxhomeloans.com/lead-forms-v2/get-mortgage?campaignid=11696&phone=8888524030&utm_source=ratezip&utm_medium=display&utm_content=default&utm_campaign=ratezip_refi&sub_id='+vObj.sPPCID+'&utm_term=default';
         window.open(url,'_blank');
       },
       bullets:[
         'No Closing Costs, No Fees',
         'Low Interest Rates',
         'Get Your Personalized Rate Quote in Minutes',
         'Conventional, Jumbo, Fixed, ARM, FHA, VA, Non-QM',
         'Cash Out, Pay Off Credit Cards, Pay College Tuition',
         '100% Online Mortgage Loan Application Available',
         '20+ Years in business'
       ],
       rating:'r45',
       stateHide:['NC', 'NY', 'CT', 'MA', 'MI', 'ME', 'TN', 'KY', 'VA', 'IN', 'AK', 'IA', 'MO', 'AL', 'VT', 'MT', 'CO', 'NE', 'RI', 'MN', 'MS', 'DE', 'HI', 'NH', 'WY', 'TX', 'WA', 'KS', 'IL', 'OH', 'SD', 'AZ', 'NJ', 'WI', 'FL', 'NM', 'MD', 'PA', 'UT', 'DC', 'NV', 'OK', 'WV', 'AR', 'ID', 'ND'],
       creditHide:['POOR'],
       purposeHide:['purch','', 'refi']
     },
  ];
  