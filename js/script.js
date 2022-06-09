let menu;

const showCompanyMenu = () => {
	menu = !menu;
	let icon = document.getElementById("company-icon");
	let companyMenu = document.getElementById("company-menu");
	menu
		? companyMenu.classList.add("show")
		: companyMenu.classList.remove("show");
	menu
		? icon.classList.replace("fa-chevron-down", "fa-chevron-up")
		: icon.classList.replace("fa-chevron-up", "fa-chevron-down");
};

let dropdown;

const showFeaturesMenu = () => {
	dropdown = !dropdown;
	let icon = document.getElementById("features-icon");
	let featuresMenu = document.getElementById("features-menu");
	dropdown
		? featuresMenu.classList.add("show")
		: featuresMenu.classList.remove("show");
	dropdown
		? icon.classList.replace("fa-chevron-down", "fa-chevron-up")
		: icon.classList.replace("fa-chevron-up", "fa-chevron-down");
};
