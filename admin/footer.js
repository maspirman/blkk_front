     
	document.write(`

     <!--**********************************
            Footer start
        ***********************************-->
        <div class="footer">
            <div class="copyright">
                <p>Copyright © Designed &amp; Developed by <a href="../index.htm" target="_blank">DexignLab</a> 2021</p>
            </div>
        </div>
        <!--**********************************
            Footer end
        ***********************************-->

		<!--**********************************
           Support ticket button start
        ***********************************-->
		
        <!--**********************************
           Support ticket button end
        ***********************************-->


	</div>
    <!--**********************************
        Main wrapper end
    ***********************************-->

    <!--**********************************
        Scripts
    ***********************************-->
    <!-- Required vendors -->
    <script src="../vendor/global/global.min.js"></script>
	<script src="../vendor/chart.js/Chart.bundle.min.js"></script>
	
	<script src="../vendor/jquery-nice-select/js/jquery.nice-select.min.js"></script>
    <script src="../vendor/select2/js/select2.full.min.js"></script>
    <script src="../js/plugins-init/select2-init.js"></script>
    <!-- Datatable -->
    <script src="../vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script src="../js/plugins-init/datatables.init.js"></script>

	
	<!-- Apex Chart -->
	<script src="../vendor/apexchart/apexchart.js"></script>
	
	<script src="../vendor/chart.js/Chart.bundle.min.js"></script>
	
	<!-- Chart piety plugin files -->
    <script src="../vendor/peity/jquery.peity.min.js"></script>
	<!-- Dashboard 1 -->
	<script src="../js/dashboard/dashboard-1.js"></script>
	 <!-- Chart Morris plugin files -->
    <script src="../vendor/raphael/raphael.min.js"></script>
    <script src="../vendor/morris/morris.min.js"></script>
    <script src="../js/plugins-init/morris-init.js"></script>
	
	<script src="../vendor/owl-carousel/owl.carousel.js"></script>
	
    <script src="../js/custom.min.js"></script>
	<script src="../js/dlabnav-init.js"></script>
	
	<script>
		function cardsCenter()
		{
			
			/*  testimonial one function by = owl.carousel.js */
			
	
			
			jQuery('.card-slider').owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				//center:true,
				slideSpeed: 3000,
				paginationSpeed: 3000,
				dots: true,
				navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
				responsive:{
					0:{
						items:1
					},
					576:{
						items:1
					},	
					800:{
						items:1
					},			
					991:{
						items:1
					},
					1200:{
						items:1
					},
					1600:{
						items:1
					}
				}
			})
		}
		
		jQuery(window).on('load',function(){
			setTimeout(function(){
				cardsCenter();0
			}, 1000); 
		});


		//Bar 
		var donutChart = function(){
			Morris.Donut({
				element: 'morris_donught',
				data: [{
					label: "\xa0 \xa0 Materi \xa0 \xa0",
					value: 12,


				}, {
					label: "\xa0 \xa0 Fasilitas \xa0 \xa0",
					value: 30
				}, {
					label: "\xa0 \xa0 Mentor \xa0 \xa0",
					value: 20
				}],
				resize: true,
				redraw: true,
				colors: ['#FFA7D7', 'rgb(255, 92, 0)', '#ffaa2b'],
				//responsive:true,
				
			});
		}
	</script>

</body>
</html>
');