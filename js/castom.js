"use strict";

let pnone_Number = "01880136814";
let all_price = "150.00";
let offer_price = "99";

let facebook_link = "https://www.facebook.com/sadmia.page";
let twitter_link = "https://twitter.com/SadMiaOfficial";
let instagrm_link = "https://www.instagram.com/sadmia.com.bd";
let youtube_link = "https://www.youtube.com/channel/UCBY3A53tkDAFLPwvuxOPAoA/videos";

// **************** ^^ Data Input ^^ ******************

let facebook_a_tag = document.querySelectorAll("#Fb-Link");
let twitter_a_tag = document.querySelectorAll("#Twi-Link");
let instagrm_a_tag = document.querySelectorAll("#Ins-Link");
let youtube_a_tag = document.querySelectorAll("#YT-Link");

for (let i = 0; i < facebook_a_tag.length; i++) {
	facebook_a_tag[i].href = facebook_link;
}
for (let i = 0; i < twitter_a_tag.length; i++) {
	twitter_a_tag[i].href = twitter_link;
}
for (let i = 0; i < instagrm_a_tag.length; i++) {
	instagrm_a_tag[i].href = instagrm_link;
}
for (let i = 0; i < youtube_a_tag.length; i++) {
	youtube_a_tag[i].href = youtube_link;
}





let spashal_price = document.getElementById('spashal-price');
spashal_price.innerHTML = offer_price;

let all_Price_Make = document.getElementById('All-Price-Make');
all_Price_Make.innerHTML = all_price;

if (all_price == "" || all_price == 0) {
	all_Price_Make.innerHTML = "00.000";
} else if (all_price < 100) {
	all_Price_Make.innerHTML = all_price + "0";
}

let public_phone_number = document.querySelectorAll("#public-Ph-No");
for (let i = 0; i < public_phone_number.length; i++) {
	public_phone_number[i].innerHTML = pnone_Number;
}



let ac_info_show = document.getElementById("ac-info-show");
let ac_h_info_1 = document.getElementById("ac-h-info-1");
let ac_h_info_2 = document.getElementById("ac-h-info-2");
let ac_h_info_3 = document.getElementById("ac-h-info-3");



ac_h_info_1.addEventListener("click",function() {
	ac_h_info_1.classList.add("bac-ac-h");
	ac_h_info_2.classList.remove("bac-ac-h");
	ac_h_info_3.classList.remove("bac-ac-h");
	ac_info_show.innerHTML = "Vegetables";
})

ac_h_info_2.addEventListener("click",function() {
	ac_h_info_1.classList.remove("bac-ac-h");
	ac_h_info_3.classList.remove("bac-ac-h");
	ac_h_info_2.classList.add("bac-ac-h");
	ac_info_show.innerHTML = "Grocery market";
})

ac_h_info_3.addEventListener("click",function() {
	ac_h_info_1.classList.remove("bac-ac-h");
	ac_h_info_2.classList.remove("bac-ac-h");
	ac_h_info_3.classList.add("bac-ac-h");
	ac_info_show.innerHTML = "Sweet";
})



let filter_All = document.getElementById("filter-All");
let filter_Oranges = document.getElementById("filter-Oranges");
let filter_Fresh_Meat = document.getElementById("filter-Fresh-Meat");
let filter_Vegetables = document.getElementById("filter-Vegetables");
let filter_Fastfood = document.getElementById("filter-Fastfood");


// FP-active

let prodict_1 = document.getElementById("prodict-1"); 
let prodict_2 = document.getElementById("prodict-2"); 
let prodict_3 = document.getElementById("prodict-3"); 
let prodict_4 = document.getElementById("prodict-4"); 
let prodict_5 = document.getElementById("prodict-5"); 
let prodict_6 = document.getElementById("prodict-6"); 
let prodict_7 = document.getElementById("prodict-7"); 
let prodict_8 = document.getElementById("prodict-8"); 


filter_Fastfood.addEventListener("click", function() {
	prodict_1.classList.add("Dis-None");
	prodict_2.classList.add("Dis-None");
	prodict_3.classList.add("Dis-None");
	prodict_4.classList.remove("Dis-None");
	prodict_5.classList.add("Dis-None");
	prodict_6.classList.add("Dis-None");
	prodict_7.classList.add("Dis-None");
	prodict_8.classList.add("Dis-None");

	filter_All.classList.remove("FP-active");
	filter_Oranges.classList.remove("FP-active");
	filter_Fresh_Meat.classList.remove("FP-active");
	filter_Vegetables.classList.remove("FP-active");
	filter_Fastfood.classList.add("FP-active");
})

filter_Vegetables.addEventListener("click", function() {
	prodict_1.classList.add("Dis-None");
	prodict_2.classList.remove("Dis-None");
	prodict_3.classList.add("Dis-None");
	prodict_4.classList.add("Dis-None");
	prodict_5.classList.add("Dis-None");
	prodict_6.classList.remove("Dis-None");
	prodict_7.classList.add("Dis-None");
	prodict_8.classList.remove("Dis-None");

	filter_All.classList.remove("FP-active");
	filter_Oranges.classList.remove("FP-active");
	filter_Fresh_Meat.classList.remove("FP-active");
	filter_Fastfood.classList.remove("FP-active");
	filter_Vegetables.classList.add("FP-active");
})


filter_Fresh_Meat.addEventListener("click", function() {
	prodict_1.classList.remove("Dis-None");
	prodict_2.classList.add("Dis-None");
	prodict_3.classList.remove("Dis-None");
	prodict_4.classList.remove("Dis-None");
	prodict_5.classList.remove("Dis-None");
	prodict_6.classList.remove("Dis-None");
	prodict_7.classList.remove("Dis-None");
	prodict_8.classList.add("Dis-None");

	filter_All.classList.remove("FP-active");
	filter_Oranges.classList.remove("FP-active");
	filter_Fresh_Meat.classList.add("FP-active");
	filter_Fastfood.classList.remove("FP-active");
	filter_Vegetables.classList.remove("FP-active");
})


filter_Oranges.addEventListener("click", function() {
	prodict_1.classList.remove("Dis-None");
	prodict_2.classList.add("Dis-None");
	prodict_3.classList.remove("Dis-None");
	prodict_4.classList.add("Dis-None");
	prodict_5.classList.remove("Dis-None");
	prodict_6.classList.add("Dis-None");
	prodict_7.classList.remove("Dis-None");
	prodict_8.classList.add("Dis-None");

	filter_All.classList.remove("FP-active");
	filter_Oranges.classList.add("FP-active");
	filter_Fresh_Meat.classList.remove("FP-active");
	filter_Fastfood.classList.remove("FP-active");
	filter_Vegetables.classList.remove("FP-active");
})

filter_All.addEventListener("click", function() {
	prodict_1.classList.remove("Dis-None");
	prodict_2.classList.remove("Dis-None");
	prodict_3.classList.remove("Dis-None");
	prodict_4.classList.remove("Dis-None");
	prodict_5.classList.remove("Dis-None");
	prodict_6.classList.remove("Dis-None");
	prodict_7.classList.remove("Dis-None");
	prodict_8.classList.remove("Dis-None");

	filter_All.classList.add("FP-active");
	filter_Oranges.classList.remove("FP-active");
	filter_Fresh_Meat.classList.remove("FP-active");
	filter_Fastfood.classList.remove("FP-active");
	filter_Vegetables.classList.remove("FP-active");
})



let copyright_year = document.getElementById("Copyright-year");

let full_year = new Date();
copyright_year.innerHTML = full_year.getFullYear();