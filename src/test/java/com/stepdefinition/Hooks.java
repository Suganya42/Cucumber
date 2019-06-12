package com.stepdefinition;

import org.junit.After;
import org.junit.Before;

public class Hooks {
	@Before
	private void before() {
		System.out.println("Browser launch");

	}
	@After
	private void after() {
		System.out.println("Browser quit");

	}

}
