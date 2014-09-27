  function rateFunction(){
       
var cfg = {
        usesUntilPrompt: 1,
        displayAppName: "My Super App",
        customLocale: {
            title: "Rate %@",
            message: "If you enjoy using %@, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!",
            buttonLabels: ["No, Thanks", "Remind Me Later", "Rate It Now",]
        },
        appStoreAppURL: {
            ios: 'itms-apps://itunes.apple.com/ru/app/id736199575?l=en&mt=8'
        }
    };
	alert(cfg)
    navigator.apprate.setup(cfg);
    navigator.apprate.promptForRating();
   
       }
