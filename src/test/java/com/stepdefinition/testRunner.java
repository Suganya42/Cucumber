package com.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Feature",dryRun=false,monochrome=true,
strict=true,glue="com.stepdefinition",plugin= {"pretty","json:target/report.json"})
public class testRunner {

}