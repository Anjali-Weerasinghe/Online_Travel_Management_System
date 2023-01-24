package com.example.travelapp;

import android.content.Intent;

import androidx.test.rule.ActivityTestRule;

import org.junit.Rule;
import org.junit.Test;

import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.action.ViewActions.click;
import static androidx.test.espresso.matcher.ViewMatchers.withId;

public class loadindpageTestcase {

    @Rule
    public ActivityTestRule<MainActivity> activityTestRule = new ActivityTestRule<MainActivity>(MainActivity.class);

    @Test
    public void testIntentLogin(){
        onView(withId(R.id.button5)).perform(click());
        Intent i = new Intent();
        activityTestRule.launchActivity(i);
    }
}
