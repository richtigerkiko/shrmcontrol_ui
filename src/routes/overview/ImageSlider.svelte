<script lang="ts">

    export let webcamImages:string[]


    let currentIndex = 0;
    
    // data:image/jpeg;base64,{webcamImages[0]}

    let currentDisplay: "Webcam"|"Timelapse" ="Webcam"

    const next = () => {
        if (currentIndex < webcamImages.length - 1) {
            currentIndex++;
            updateImage()
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage()
        }
    }

    const updateImage = () => {
        let imageHtmlElement = document.getElementById("webcamimage") as HTMLImageElement
        imageHtmlElement.src = "data:image/jpeg;base64," + webcamImages[currentIndex]
    }
</script>

<article>
	<header>{currentDisplay}</header>
	<body class="slideshow-container">
		<center>
            {#if currentDisplay=="Webcam"}
                <button class="prev" on:click={prev} disabled="{currentIndex == 0}">&#10094;</button>

                <button class="next" on:click={next}  disabled="{currentIndex == webcamImages.length - 1}">&#10095;</button>
                <img id="webcamimage"
                    src="data:image/jpeg;base64,{webcamImages[0]}"
                    alt="Latest webcam"
                />
            {:else}
            <div>
                <video src="https://shroomcontrol.warumhalbmast.de/api/Sensor/GetVideo" autoplay loop muted style="width:100%">
                    <track kind="captions">
                </video>
            </div>
            {/if}
		</center>
	</body>
    <footer>
        <div class="grid">
            <button on:click={() => currentDisplay = "Webcam"}>Webcam</button>
            <button on:click={() => currentDisplay = "Timelapse"}>Time-lapse</button>
        </div>
    </footer>
</article>

<style>
	.slideshow-container {
		position: relative;
		margin: auto;
	}

    .prev, .next {
        position: absolute;
        top: 50%;
        margin-top: -22px;
		user-select: none;
		width: auto;
    }

	.prev {
		left: 10px;
	}

    .next {
        right: 10px;
    }

    video, img {
        transform: rotate(-90deg);
    }
</style>
