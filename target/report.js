$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/AddTarifCustomer.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Customer navigates to the add tariff plan to customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerTariffPlan.customer_navigates_to_the_add_tariff_plan_to_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Customer enter the customer id and click submit button",
  "rows": [
    {
      "cells": [
        "387498"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CustomerTariffPlan.customer_enter_the_customer_id_and_click_submit_button(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the button called add tariff plan to customer",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerTariffPlan.user_click_the_button_called_add_tariff_plan_to_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get the tariff planed assigned message",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerTariffPlan.user_should_get_the_tariff_planed_assigned_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/AddTarifPlan.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User need to navigate to the add tarif plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "User fill the informations\"\u003cMonthlyRent\u003e\",\"\u003cLocalMin\u003e\",\"\u003cIntMin\u003e\",\"\u003cSmsPack\u003e\",\"\u003cMinCharge\u003e\",\"\u003cIntCharge\u003e\",\"\u003cSmsCharge\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "USer click the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "Successfully tarif plan added",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthlyRent",
        "LocalMin",
        "IntMin",
        "SmsPack",
        "MinCharge",
        "IntCharge",
        "SmsCharge"
      ]
    },
    {
      "cells": [
        "7000",
        "100",
        "200",
        "300",
        "40",
        "50",
        "60"
      ]
    },
    {
      "cells": [
        "9000",
        "200",
        "300",
        "400",
        "50",
        "60",
        "70"
      ]
    },
    {
      "cells": [
        "4000",
        "300",
        "400",
        "500",
        "60",
        "70",
        "80"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User need to navigate to the add tarif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "TariffPlan.user_need_to_navigate_to_the_add_tarif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill the informations\"7000\",\"100\",\"200\",\"300\",\"40\",\"50\",\"60\"",
  "keyword": "When "
});
formatter.match({
  "location": "TariffPlan.user_fill_the_informations(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USer click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "TariffPlan.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Successfully tarif plan added",
  "keyword": "Then "
});
formatter.match({
  "location": "TariffPlan.successfully_tarif_plan_added()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User need to navigate to the add tarif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "TariffPlan.user_need_to_navigate_to_the_add_tarif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill the informations\"9000\",\"200\",\"300\",\"400\",\"50\",\"60\",\"70\"",
  "keyword": "When "
});
formatter.match({
  "location": "TariffPlan.user_fill_the_informations(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USer click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "TariffPlan.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Successfully tarif plan added",
  "keyword": "Then "
});
formatter.match({
  "location": "TariffPlan.successfully_tarif_plan_added()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User need to navigate to the add tarif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "TariffPlan.user_need_to_navigate_to_the_add_tarif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill the informations\"4000\",\"300\",\"400\",\"500\",\"60\",\"70\",\"80\"",
  "keyword": "When "
});
formatter.match({
  "location": "TariffPlan.user_fill_the_informations(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "USer click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "TariffPlan.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Successfully tarif plan added",
  "keyword": "Then "
});
formatter.match({
  "location": "TariffPlan.successfully_tarif_plan_added()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/CustomerAdding.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Cstomer adding to telecom",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerAdding.the_user_is_in_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAdding.the_user_click_on_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is filling all the fields",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerAdding.user_is_filling_all_the_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAdding.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be displayed the customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerAdding.the_user_should_be_displayed_the_customer_id()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/DataPassing.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User need to click the add customer button to navigate",
  "keyword": "Given "
});
formatter.match({
  "location": "DataPassing.user_need_to_click_the_add_customer_button_to_navigate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filling all the vaild details in fields",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Selenium"
      ]
    },
    {
      "cells": [
        "LastName",
        "Test"
      ]
    },
    {
      "cells": [
        "Email",
        "sel@gmail.com"
      ]
    },
    {
      "cells": [
        "Address",
        "OMR"
      ]
    },
    {
      "cells": [
        "Phone",
        "0987654321"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "DataPassing.user_filling_all_the_vaild_details_in_fields(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the button called add customer",
  "keyword": "And "
});
formatter.match({
  "location": "DataPassing.user_click_the_button_called_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get the customer id in end",
  "keyword": "Then "
});
formatter.match({
  "location": "DataPassing.user_get_the_customer_id_in_end()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/PayBilling.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User navigates to the pay billing page",
  "keyword": "Given "
});
formatter.match({
  "location": "BillPaying.user_navigates_to_the_pay_billing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the id and click submit button",
  "rows": [
    {
      "cells": [
        "387498"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "BillPaying.user_enters_the_id_and_click_submit_button(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User succesfully getting the pay billing details",
  "keyword": "Then "
});
formatter.match({
  "location": "BillPaying.user_succesfully_getting_the_pay_billing_details()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/Steps.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User need to click the add customer button",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_need_to_click_the_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filling all the vaild details",
  "rows": [
    {
      "cells": [
        "Test",
        "Selenium",
        "test@gmail.com",
        "Chennai",
        "1234567890"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_filling_all_the_vaild_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the button add customer",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_the_button_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get the customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_get_the_customer_id()"
});
formatter.result({
  "status": "passed"
});
});