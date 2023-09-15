/*
	WEB 303 Assignment 1 - jQuery
	{Bashar Matar}
*/

$(document).ready(function () {
	// Create an event handler for change or keyup on salary and percent fields
	$("#yearly-salary, #percent").on("change keyup", function () {
		// Get the values from the input fields
		var salary = parseFloat($("#yearly-salary").val());
		var percent = parseFloat($("#percent").val());

		// Calculate the amount
		var amount = (salary * percent) / 100;

		var formattedAmount = "$" + amount.toFixed(2);

		// Update the span element with the calculated amount
		$("#amount").text(formattedAmount);
	});
});
