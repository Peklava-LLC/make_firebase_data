import os
from dotenv import load_dotenv
import json
import requests
import time

load_dotenv()

DATA_NODE = os.getenv('DATA_NODE')

# default payload for uploading firebase data
payload = {
    "order": 0,
    "logo": "amerisave.png",
    "headline": "",
    "subHeadline": "",
    "phone": "",
    "nmls": "",
    "buttonText": "View Rates",
    "awConversion": "",
    "buttonUrl": "",
    "dollarValue": 0,
    "phoneScript": "",
    "buttonScript": "",
    "link": "",
    "bullets": [""],
    "rating": "",
    "stateHide": [""],
    "loanAmountHide": 0,
    "creditHide": 0,
    "purchTimeframe": [""],
    "purposeHide": [""],
    "hideCard": False,
    "buttonWarning": "",
    "vetBoost": 0,
    "refiPos": 1,
    "isVeteranHide": False
}


with open("./%s/data.json"%(DATA_NODE)) as file:
    data = json.load(file)
    for i in range(0, len(data)):
        payload["order"] = i
        payload["logo"] = data[i]["logo"]
        try:
            payload["headline"] = data[i]["headline"]
        except:
            payload["headline"] = ""

        try:
            payload["subHeadline"] = data[i]["subHeadline"]
        except:
            payload["subHeadline"] = ""

        try:
            payload["phone"] = data[i]["phone"]
        except:
            payload["phone"] = ""

        try:
            payload["nmls"] = data[i]["nmls"]
        except:
            payload["nmls"] = ""

        try:
            payload["buttonText"] = data[i]["buttonText"]
        except:
            payload["buttonText"] = ""

        try:
            payload["awConversion"] = data[i]["awConversion"]
        except:
            payload["awConversion"] = ""

        try:
            payload["buttonUrl"] = data[i]["buttonUrl"]
        except:
            payload["buttonUrl"] = ""

        try:
            payload["phoneScript"] = data[i]["phoneScript"]
        except:
            payload["phoneScript"] = ""
        
        try:
            payload["dollarValue"] = data[i]["dollarValue"]
        except:
            payload["dollarValue"] = ""
            
        try:
            payload["buttonScript"] = data[i]["buttonScript"]
        except:
            payload["buttonScript"] = ""

        try:
            payload["bullets"] = data[i]["bullets"]
        except:
            payload["bullets"] = ""
        
        try:
            payload["rating"] = data[i]["rating"]
        except:
            payload["rating"] = ""
        
        try:
            payload["stateHide"] = data[i]["stateHide"]
        except:
            payload["stateHide"] = [""]
        
        try:
            payload["loanAmountHide"] = data[i]["loanHide"]
        except:
            payload["loanAmountHide"] = 0
        
        try:
            payload["creditHide"] = data[i]["creditHide"]
            if type(data[i]["creditHide"]) is not int:
                if data[i]["creditHide"][0] == "poor":
                    payload["creditHide"] = 630
                elif data[i]["creditHide"][0] == "fair":
                    payload["creditHide"] = 690
                elif data[i]["creditHide"][0] == "good":
                    payload["creditHide"] = 720
        except:
            payload["creditHide"] = 0
        
        try:
            payload["purchTimeframe"] = data[i]["purchTimeframe"]
        except:
            payload["purchTimeframe"] = [""]
        
        
        try:
            payload["purposeHide"] = data[i]["purposeHide"]
        except:
            payload["purposeHide"] = [""]
        
        try:
            payload["hideCard"] = data[i]["hideCard"]
        except:
            payload["hideCard"] = False
        
        try:
            payload["buttonWarning"] = data[i]["buttonWarning"]
        except:
            payload["buttonWarning"] = ""
        
        try:
            payload["vetBoost"] = data[i]["vetBoost"]
        except:
            payload["vetBoost"] = ""
        
        try:
            payload["refiPos"] = data[i]["refiPos"]
        except:
            payload["refiPos"] = ""
        
        try:
            payload["grHide"] = data[i]["grHide"]
        except:
            payload["grHide"] = ""

        try:
            payload["link"] = data[i]["link"]
        except:
            payload["link"] = ""

        time.sleep(5)

        headers = { 'Content-Type': 'text/plain' }

        response = requests.request("post", "https://ratezip-comparison-table-default-rtdb.firebaseio.com/%s_data.json"%(DATA_NODE), headers=headers, data=json.dumps(payload))

        print(response.text)
