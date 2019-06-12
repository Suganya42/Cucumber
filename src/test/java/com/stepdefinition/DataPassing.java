package com.stepdefinition;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class DataPassing {
	static WebDriver driver;
	@Given("User need to click the add customer button to navigate")
	public void user_need_to_click_the_add_customer_button_to_navigate() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Ganya\\eclipse-workspace\\Suganay_workspace\\Cucumber\\Webdriver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	    
	}

	@When("User filling all the vaild details in fields")
	public void user_filling_all_the_vaild_details_in_fields(DataTable customerTable) {
		Map<String, String> customerMap = customerTable.asMap(String.class, String.class);
	    System.out.println(customerMap);
	    driver.findElement(By.id("fname")).sendKeys(customerMap.get("FirstName"));
		driver.findElement(By.id("lname")).sendKeys(customerMap.get("LastName"));
		driver.findElement(By.id("email")).sendKeys(customerMap.get("Email"));
		driver.findElement(By.name("addr")).sendKeys(customerMap.get("Address"));
		driver.findElement(By.name("telephoneno")).sendKeys(customerMap.get("Phone"));
	}

	@When("User click the button called add customer")
	public void user_click_the_button_called_add_customer() {
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	    
	}

	@Then("User get the customer id in end")
	public void user_get_the_customer_id_in_end() {
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	    
	}

}
