$(document).ready(function() {
	var stepNum = $('#stepNum');
	var stepLabel = $('.POPLabel');
	var stepTitle = $('.POPTitle');

	var inputContainer = $('.inputContainer');
	var POPInputText = $('.POPInputText');
	var POPInputLink = $('.POPInputLink');
	var POPInputWallet = $('.POPInputWallet');
	var POPInputUserId = $('.POPInputUserId');
	var POPSubmit = $('#POPSubmit');

	var radioContainer = $('.radioContainer');
	var POPradios = $('.POPradio');
	var linkRadio = $('#linkRadio');
	var walletRadio = $('#walletRadio');

	var POPBottomDescriptionContainer = $('.POPBottomDescriptionContainer');
	var successContainer = $('.successContainer');
	var successTableCellWalletValue = $('.successTableCellWalletValue');
	var successTableCellGithubValue = $('.successTableCellGithubValue');
	var successTableCellGistValue = $('.successTableCellGistValue');
	var token = $('#token');
	var loader = $('.loader');
	var middleMainContainerInner = $('.middleMainContainerInner');
	var bottomDesc = $('#bottomDesc');
	var bottomDescAddition = $('#bottomDescAddition');
	var bottomDescAddition2 = $('#bottomDescAddition2');
	var githubRibbon = $('.githubRibbon');
	var copyTable = $('.copyTable');
	var copyTableCellWalletValue1 = $('.copyTableCellWalletValue1');
	var copyTableCellWalletValue2 = $('.copyTableCellWalletValue2');
	var step1ButtonsContainer = $('.step1ButtonsContainer');

	var POPTitleContainer = $('.POPTitleContainer');
	var POPTitleContainerShortend = $('.POPTitleContainerShortend');
	var POPDescContainer = $('.POPDescContainer');
	var POPDescContainerShortend = $('.POPDescContainerShortend');

	var step1CopyTable = $('#step1CopyTable');
	var step3CopyTable = $('#step3CopyTable');
	
	var checkButton = $('#verifyButton');

	var copyText1Slide = $('.copyText1Slide');
	var createGist1Slide = $('.createGist1Slide');
	var nextButton1Slide = $('.nextButton1Slide');

	var topLabel1 = $('.topLabel1');
	var topLabel2 = $('.topLabel2');
	var bottomLabelRight = $('.bottomLabelRight');
	var homeButton = $('.homeButton');
	
	var shareButton = $('.shareButton');
	
	var copyHashTable = $('#copyHashTable');
	var hashToAddress = "";

	var addressVal = $("#addressVal");
	var octocat_eyes = $("#octocat_eyes");

	var copyTableCellCopyButton = $(".copyTableCellCopyButton");
	var copyTableCellCopyButton2 = $(".copyTableCellCopyButton2");

	var octocat_eyes_right_0 = parseFloat(octocat_eyes.css("right"));
	console.log(octocat_eyes_right_0);
	var octocat_eyes_top_0 = parseFloat(octocat_eyes.css("top"));
	var octocat_max_shift_x = 3.0;
	var octocat_max_shift_y = 10.0;

	var prevPageX;
	var prevPageY;

	$("body").mousemove(function( event ) {
		var copyButton1SlidePos = copyText1Slide.offset();
		var copyTableCellCopyButtonPos = copyTableCellCopyButton.offset();
		var copyTableCellCopyButton2Pos = copyTableCellCopyButton2.offset();
		if (!(((copyButton1SlidePos.left) <= parseFloat(event.pageX) && parseFloat(event.pageX) <= (copyButton1SlidePos.left + copyText1Slide.outerWidth()))
  			&& ((copyButton1SlidePos.top) <= parseFloat(event.pageY) && parseFloat(event.pageY) <= (copyButton1SlidePos.top + copyText1Slide.outerHeight())) && parseInt(stepNum.val()) == 1)
  			&& !(((copyTableCellCopyButtonPos.left) <= parseFloat(event.pageX) && parseFloat(event.pageX) <= (copyTableCellCopyButtonPos.left + copyTableCellCopyButton.outerWidth()))
  			&& ((copyTableCellCopyButtonPos.top) <= parseFloat(event.pageY) && parseFloat(event.pageY) <= (copyTableCellCopyButtonPos.top + copyTableCellCopyButton.outerHeight())) && parseInt(stepNum.val()) == 3)
  			&& !(((copyTableCellCopyButton2Pos.left) <= parseFloat(event.pageX) && parseFloat(event.pageX) <= (copyTableCellCopyButton2Pos.left + copyTableCellCopyButton2.outerWidth()))
  			&& ((copyTableCellCopyButton2Pos.top) <= parseFloat(event.pageY) && parseFloat(event.pageY) <= (copyTableCellCopyButton2Pos.top + copyTableCellCopyButton2.outerHeight())) && parseInt(stepNum.val()) == 3)) {
  			eyesAnimation(event);
  		}
	});

	function eyesAnimation(event) {
		var win_width = parseFloat($( window ).width());
  		var win_height = parseFloat(window.innerHeight);//parseFloat($( window ).height());
  		var max_right_shift;
  		if (!prevPageX)
  			prevPageX = parseFloat(event.pageX);
  		if (!prevPageY)
  			prevPageY = parseFloat(event.pageY);
  		var pageX = 0;
  		var pageY = 0;
  		if (((win_width - parseFloat(event.pageX)) ) > (octocat_eyes_right_0))
  			max_right_shift = parseFloat(win_width - octocat_eyes_right_0);
  		else
  			max_right_shift = parseFloat(octocat_eyes_right_0 - 90.0);
  		var max_top_shift = parseFloat(win_height - octocat_eyes_top_0);

  		var copyButton1SlidePos = copyText1Slide.offset();
  		
  		pageX = parseFloat(event.pageX);
  		prevPageX = parseFloat(event.pageX);

  		pageY = parseFloat(event.pageY);
  		prevPageY = parseFloat(event.pageY);

  		//console.log(pageX + ", " + pageY + ", " + prevPageX + ", " + prevPageY + ", " + parseFloat(event.pageX) + ", " + parseFloat(event.pageY) + "' " + copyButton1SlidePos.left + ", " + (copyButton1SlidePos.left + copyText1Slide.outerWidth()));
  		var	octocat_new_right_shift = octocat_eyes_right_0 + (win_width - pageX - octocat_eyes_right_0)/max_right_shift*octocat_max_shift_x;
  		var octocat_new_top_shift = octocat_eyes_top_0 - (win_height - pageY - octocat_eyes_top_0)/max_top_shift*octocat_max_shift_y;
  		//console.log(octocat_new_right_shift.toString());
  		octocat_eyes.css("right", octocat_new_right_shift.toString());
  		octocat_eyes.css("top", octocat_new_top_shift.toString());
  		//console.log(octocat_eyes.css("right") + ", " + octocat_eyes.css("top"));
	}

	var wallet = QueryString.wallet;
	if (wallet) {
		POPInputWallet.val(wallet);
		changeStepNumber(null, 5);
		walletRadioCheck();
		getGistLinkByAddress(function(err, output) {
			middleMainContainerInner.fadeIn(500);
			loader.addClass('hide');
			if (!err) {
				if (output != 0) {
					POPInputLink.val(output);
					changeStepNumber(null, 4);
				}
			}
		});
	}

  	topLabel1.click(function(e) {
  		location.reload();
  	});

  	topLabel2.click(function(e) {
  		location.reload();
  	});

  	bottomLabelRight.click(function(e) {
  		location.reload();
  	});

	githubRibbon.click(function(e) {
		window.open("https://github.com/OBrezhniev/ProofOfDelivery", "_blank");
	});

	homeButton.click(function(e) {
		location.reload();
	});

	checkButton.click(function(e) {
		changeStepNumber(null, 5);
	});


	function changeStepNumber(addition, absolute) {
		console.log(hashToAddress);
		var newStepVal = 0;
		if (addition)
			newStepVal = parseInt(stepNum.val()) + addition;
		else
			newStepVal = absolute;
		stepNum.val(newStepVal);
		var newStepNum = parseInt(stepNum.val());

		stepLabel.text("Step " + newStepNum);
		//POPInput.val("");
		switch(newStepNum) {
			case 1:
				{
					stepTitle.text("Copy text & Create Gist");
					bottomDesc.text("Press \"Copy text\" to copy verification text to a clipboard and paste it as a secret gist on Github. After verification, we will ask you to deposit a service fee of 0.1 ether to a smart contract at the address");
					stepLabel.removeClass("hide");
					radioContainer.addClass("hide");
					inputContainer.show();
					POPBottomDescriptionContainer.show();
					POPInputText.removeClass('hide');
					POPInputText.focus();
					POPInputLink.addClass('hide');
					POPInputUserId.addClass('hide');
					POPInputWallet.addClass('hide');
					POPBottomDescriptionContainer.removeClass("hide");
					copyTable.show();
					step1CopyTable.removeClass("hide");
					step3CopyTable.addClass("hide");
					bottomDescAddition.addClass("hide");
					copyHashTable.addClass("hide");
					successContainer.addClass("hide");
					POPTitleContainerShortend.addClass("POPTitleContainer");
					POPTitleContainerShortend.removeClass("POPTitleContainerShortend");
					POPDescContainerShortend.addClass("POPDescContainer");
					POPDescContainerShortend.removeClass("POPDescContainerShortend");
					POPSubmit.addClass("hide");
					step1ButtonsContainer.removeClass("hide");
				}
				break;
			case 2:
				{
					stepTitle.text("Paste gist's url");
					bottomDesc.text("Press \"Copy text\" to copy verification text to a clipboard and paste it as a secret gist on Github. After verification, we will ask you to deposit a service fee of 0.1 ether to a smart contract at the address");
					stepLabel.removeClass("hide");
					radioContainer.addClass("hide");
					inputContainer.show();
					POPBottomDescriptionContainer.show();
					POPInputText.addClass('hide');
					POPInputLink.removeClass('hide');
					POPInputLink.focus();
					POPInputUserId.addClass('hide');
					POPInputWallet.addClass('hide');
					POPBottomDescriptionContainer.removeClass("hide");
					step1CopyTable.removeClass("hide");
					step3CopyTable.addClass("hide");
					bottomDescAddition.addClass("hide");
					copyHashTable.addClass("hide");
					successContainer.addClass("hide");
					POPTitleContainerShortend.addClass("POPTitleContainer");
					POPTitleContainerShortend.removeClass("POPTitleContainerShortend");
					POPDescContainerShortend.addClass("POPDescContainer");
					POPDescContainerShortend.removeClass("POPDescContainerShortend");
					POPSubmit.removeClass("hide");
					step1ButtonsContainer.addClass("hide");
				}
				break;
			case 3:
				{
					stepTitle.text("Submit your Ethereum address");
					bottomDesc.text("Deposit service fee of 0.1 ETH to a smart contract with a message");

					$("#hashVal").text(hashToAddress);
					var clientCopyHash = new ZeroClipboard( document.getElementById("hashCopy") );

					clientCopyHash.on( "ready", function( readyEvent ) {
						clientCopyHash.on( "beforecopy", function( event ) {
							$("#hashCopy").attr("data-clipboard-text", hashToAddress);
					    });
					    clientCopyHash.on( "aftercopy", function( event ) {
					      Materialize.toast('message copied to buffer', 3000, 'rounded');
					    });
				  	});

				  	bottomDescAddition.html("at the address");
					stepLabel.removeClass("hide");
					radioContainer.addClass("hide");
					inputContainer.show();
					POPBottomDescriptionContainer.show();
					POPInputText.addClass('hide');
					POPInputLink.addClass('hide');
					POPInputUserId.addClass('hide');
					POPInputWallet.removeClass('hide');
					POPInputWallet.focus();
					POPBottomDescriptionContainer.removeClass("hide");
					step1CopyTable.addClass("hide");
					step3CopyTable.removeClass("hide");
					bottomDescAddition.removeClass("hide");
					copyHashTable.removeClass("hide");
					successContainer.addClass("hide");
					POPTitleContainerShortend.addClass("POPTitleContainer");
					POPTitleContainerShortend.removeClass("POPTitleContainerShortend");
					POPDescContainerShortend.addClass("POPDescContainer");
					POPDescContainerShortend.removeClass("POPDescContainerShortend");
					POPSubmit.removeClass("hide");
					step1ButtonsContainer.addClass("hide");
				}
				break;
			case 4:
				{
					stepTitle.text("Success");
					stepLabel.addClass("hide");
					POPBottomDescriptionContainer.hide();
					bottomDescAddition2.html('There is a smart contract deployed to the public ethereum Blockchain. You can find it here:\
						<table cellspacing="0" cellpadding="0" class="copyTable nomargin" style="display: table;"><tbody class="copyTableBody"><tr><td class="copyTableCellWalletValue2">' 
						+ copyTableCellWalletValue1.text() + 
						'</td><td id="copyWallet3" data-clipboard-text="'+ copyTableCellWalletValue1.text() + '" class="copyTableCellCopyButton"></td></tr></tbody></table>This contract has the following public method signature:\
						hasGithubAcc (address _addr).<br/>\
						If the _addr is registered in the contract\'s Github Account Registry, the hasGithubAcc method returns true. Otherwise it returns false.');

					successTableCellWalletValue.text(POPInputWallet.val());
					successTableCellGithubValue.text(POPInputLink.val());
					successTableCellGistValue.text("https://github.com/" + (getUserIdFromGistLink(POPInputLink.val())));
					radioContainer.addClass("hide");
					inputContainer.hide();
					POPBottomDescriptionContainer.addClass("hide");
					step1CopyTable.addClass("hide");
					step3CopyTable.addClass("hide");
					bottomDescAddition.addClass("hide");
					bottomDescAddition2.removeClass("hide");
					copyHashTable.addClass("hide");
					successContainer.removeClass("hide");
					POPTitleContainerShortend.addClass("POPTitleContainer");
					POPTitleContainerShortend.removeClass("POPTitleContainerShortend");
					POPDescContainerShortend.addClass("POPDescContainer");
					POPDescContainerShortend.removeClass("POPDescContainerShortend");
					POPSubmit.removeClass("hide");
					step1ButtonsContainer.addClass("hide");

					var clientCopyWallet3 = new ZeroClipboard( $("#copyWallet3")[0] );

					clientCopyWallet3.on( "ready", function( readyEvent ) {
					    clientCopyWallet3.on( "aftercopy", function( event ) {
					      Materialize.toast('Address copied to buffer', 3000, 'rounded');
					    });
				  	});
				}
				break;
			case 5:
				{
					stepTitle.text("Check");
					bottomDesc.html('Enter a github account or an ethereum address to continue. <br/>\
						There is a smart contract deployed to the public ethereum Blockchain. You can find it here:\
						<table cellspacing="0" cellpadding="0" class="copyTable nomargin" style="display: table;"><tbody class="copyTableBody"><tr><td class="copyTableCellWalletValue2">' 
						+ copyTableCellWalletValue1.text() + 
						'</td><td id="copyWallet2" data-clipboard-text="'+ copyTableCellWalletValue1.text() + '" class="copyTableCellCopyButton"></td></tr></tbody></table>This contract has the following public method signature:\
						hasGithubAcc (address _addr).<br/>\
						If the _addr is registered in the contract\'s Github Account Registry, the hasGithubAcc method returns true. Otherwise it returns false.');

					POPBottomDescriptionContainer.show();
					stepLabel.addClass("hide");
					linkRadioCheck();
					radioContainer.removeClass("hide");
					inputContainer.show();
					POPBottomDescriptionContainer.show();
					POPInputUserId.removeClass('hide');
					POPInputUserId.focus();
					POPInputText.addClass('hide');
					POPInputWallet.addClass('hide');
					POPBottomDescriptionContainer.removeClass("hide");
					step1CopyTable.addClass("hide");
					step3CopyTable.addClass("hide");
					bottomDescAddition.addClass("hide");
					bottomDescAddition2.addClass("hide");
					copyHashTable.addClass("hide");
					successContainer.addClass("hide");
					POPTitleContainer.addClass("POPTitleContainerShortend");
					POPTitleContainer.removeClass("POPTitleContainer");
					POPDescContainer.addClass("POPDescContainerShortend");
					POPDescContainer.removeClass("POPDescContainer");
					POPSubmit.removeClass("hide");
					step1ButtonsContainer.addClass("hide");

					var clientCopyWallet2 = new ZeroClipboard( $("#copyWallet2")[0] );

					console.log(clientCopyWallet2);

					clientCopyWallet2.on( "ready", function( readyEvent ) {
						clientCopyWallet2.on( "aftercopy", function( event ) {
					      Materialize.toast('Address copied to buffer', 3000, 'rounded');
					    });
				  	});
				}
				break;
			default:
				{
					stepTitle.text("Copy text & Create Gist");
					stepLabel.removeClass("hide");
					POPBottomDescriptionContainer.removeClass("hide");
					step1CopyTable.addClass("hide");
					step3CopyTable.addClass("hide");
					bottomDescAddition.addClass("hide");
					bottomDescAddition2.addClass("hide");
					copyHashTable.addClass("hide");
					successContainer.addClass("hide");
					POPSubmit.addClass("hide");
				}
				break;
		}
	}

	function getMessageHash(cb) {
		$.post("/getMessageHash", {
			"gistContent": POPInputText.val()
		}, function( data ) {
			if (data.success) {
				cb(data.success.message);
				
			} else {
				swal({   
					title: "Error",   
					text: data.error.message,   
					type: "error"
				});
			}
		});
	}

});