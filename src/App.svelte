<script>
	import '../node_modules/bulma/css/bulma.min.css';
</script>


<section class="hero is-primary is-medium">
	<!-- Hero head: will stick at the top -->
	<img src="http://localhost:5000/images/Hero-Graphic-01-SK.svg" alt="Hero Image" />

	<div class="hero-head">
		<div class="navbar-brand">
			<div class="logo">
			  <img src="images/DP-Icon-01@2x.png" alt="Dream Potential Logo">
			</div>
			<span class="navbar-burger burger" data-target="navbarMenuHeroA">
			  <span></span>
			  <span></span>
			  <span></span>
			</span>
		</div>	
		<nav class="navbar">
		  <div class="container">
			<div id="navbarMenuHeroA" class="navbar-menu">
			  <div class="navbar-end">
				<a class="navbar-item is-active">
				  Home
				</a>
				<a class="navbar-item">
				  Examples
				</a>
				<a class="navbar-item">
				  Documentation
				</a>
				<span class="navbar-item">
				  <a class="button is-primary is-inverted">
					<span class="icon">
					  <i class="fab fa-github"></i>
					</span>
					<span>Download</span>
				  </a>
				</span>
			  </div>
			</div>
		  </div>
		</nav>
	  </div>
	
	
</section>

<section>
  
	<!-- Hero footer: will stick at the bottom -->
	<div class="hero-foot">
	  <nav class="tabs">
		<div class="container">
		  
		</div>
	  </nav>
	</div>
</section>

<style>
	:global(body) {
        background-color: #411C71;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	
	img{
		position: absolute;
		right: 0px;
		top: 0px;
		width: 500px;

	}
	.logo img{ 
	position: absolute;
    width: 80px;
    z-index: 2;
    left: 10px;
	top: 10px;
	}

	.hero.is-primary{
		background-color:transparent;
	}

	.hero.is-primary .navbar-link.is-active, .hero.is-primary .navbar-link:hover, .hero.is-primary a.navbar-item.is-active, .hero.is-primary a.navbar-item:hover  {
    background-color: transparent;
    color: #fff;
	}

</style>