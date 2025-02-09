// Snowfall and New Year Animation
document.addEventListener('DOMContentLoaded', function () {
    // Snowfall Effect
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow';
    document.body.appendChild(snowContainer);
  
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
  
      // Random horizontal position
      snowflake.style.left = `${Math.random() * 100}vw`;
  
      // Random size
      const size = Math.random() * 10 + 5; // Minimum size of 5px
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
  
      snowContainer.appendChild(snowflake);
  
      // Remove the snowflake after it falls
      setTimeout(() => {
        snowflake.remove();
      }, 10000); // Same as the animation duration
    }
  
    // Create snowflakes every 100ms
    setInterval(createSnowflake, 100);
  
    // New Year Lights Effect
    const lightsContainer = document.createElement('div');
    lightsContainer.classList.add('new-year-lights');
    document.body.appendChild(lightsContainer);
  
    for (let i = 0; i < 10; i++) {
      const light = document.createElement('div');
      light.classList.add('light');
      lightsContainer.appendChild(light);
    }
  
    // New Year Banner
    const banner = document.createElement('div');
    banner.classList.add('new-year-banner');
    banner.innerHTML = "<p>Site is still under construction!</p>";
    document.body.appendChild(banner);
  
    // New Year Music
    const audioElement = document.createElement('audio');
    audioElement.id = 'new-year-music';
    audioElement.autoplay = true;
    audioElement.loop = true;
  
  //  const sourceElement = document.createElement('source');
  //  sourceElement.src = 'path_to_your_new_year_music.mp3'; // Ensure correct file path
  //  sourceElement.type = 'audio/mp3';
  //  audioElement.appendChild(sourceElement);
  //  document.body.appendChild(audioElement);
  
    // Add event listener to stop music when user leaves the page
    window.addEventListener('beforeunload', function () {
      audioElement.pause();
    });
  });
  