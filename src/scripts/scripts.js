var activePage = 1;
var allPages = document.querySelectorAll('[id^="page-"]');
var allPageBtns = document.querySelectorAll('[id^="pageBtn-"]');

var firstPage = document.getElementById("page-1");
if(firstPage != undefined && firstPage != null)
{
	firstPage.classList.remove("hidden");
  	firstPage.classList.add("block");
  	allPageBtns[0].checked="checked";
}


function showPage(targetPage)
		{

			var activePageElement = document.getElementById("page-" + activePage);
			var targetPageElement = document.getElementById("page-" + targetPage);
			
			if(targetPage != activePage)
			{
				activePageElement.classList.remove("block");
  				activePageElement.classList.add("hidden");
  				
  				targetPageElement.classList.remove("hidden");
  				targetPageElement.classList.add("block");
  				activePage = targetPage;
  			}
	

			allPages.forEach((page) => {
				if(targetPageElement.id != page.id)
				{
					page.classList.remove("block");
  					page.classList.add("hidden");
				}
		
			});
  		}
  		
  		
  		allPageBtns.forEach((pageBtn,idx,array) => {
				
				pageBtn.addEventListener('click', () => {
					showPage(idx +1);
    			});
		
			});



