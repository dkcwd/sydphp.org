$('document').ready
(
	function()
	{
		$('.member-summary a').click
		(
			function(e)
			{
				e.preventDefault();
				$.get
				(
					$(e.target).attr('href'),
					function(response)
					{
						$('#window-popup').remove();
						$(response).appendTo(document.body);
						$('#window-popup').modal
						(
							{
								show:		true,
								backdrop:	true
							}
						)
					}
				);
			}
		);
	}
);