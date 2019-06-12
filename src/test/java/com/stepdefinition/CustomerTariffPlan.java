package com.stepdefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class CustomerTariffPlan {
	static WebDriver driver;
	@Given("Customer navigates to the add tariff plan to customer page")
	public void customer_navigates_to_the_add_tariff_plan_to_customer_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Ganya\\eclipse-workspace\\Suganay_workspace\\Cucumber\\Webdriver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
	    driver.findElement(By.xpath("(//a[text()='Add Tariff Plan to Customer'])[1]")).click();
	}

	@When("Customer enter the customer id and click submit button")
	public void customer_enter_the_customer_id_and_click_submit_button(DataTable cusTariffPlanTable) {
		List<String> cusTariffPlanList = cusTariffPlanTable.asList(String.class);
		System.out.println(cusTariffPlanList);
		driver.findElement(By.id("customer_id")).sendKeys(cusTariffPlanList.get(0));
		driver.findElement(By.xpath("//input[@value='submit']")).click();
		
	}

	@When("User click the button called add tariff plan to customer")
	public void user_click_the_button_called_add_tariff_plan_to_customer() {
		driver.findElement(By.xpath("//input[@value='Add Tariff Plan to Customer']")).click();
		
	}

	@Then("User should get the tariff planed assigned message")
	public void user_should_get_the_tariff_planed_assigned_message() {
		Assert.assertTrue(driver.findElement(By.tagName("h2")).isDisplayed());
	    
	}

}
