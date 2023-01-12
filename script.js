const wheels = document.querySelectorAll('.wheel');

// Use setTimeout to delay the initial position generation
setTimeout(() => {
    // On page load, assign final positions and rotations to the wheels
    wheels.forEach(wheel => {
        // Generate random values for the final position and rotation of the wheel
        let randomTop = Math.floor(Math.random() * 3700) - 1000 + '%';
        let randomLeft = Math.floor(Math.random() * 3900) - 2000 + '%';
        let randomDegree = Math.floor(Math.random() * 360) + 'deg';
        // Update the transform of the wheel to the final position and rotation
        wheel.style.transform = `translate(${randomLeft}, ${randomTop}) rotate(${randomDegree})`;
    });
}, 100);

// Set an interval to update the positions every 30 seconds
setInterval(() => {
    wheels.forEach(wheel => {
        // Generate new random values for the final position and rotation of the wheel
        let randomTop = Math.floor(Math.random() * 3700) - 1000 + '%';
        let randomLeft = Math.floor(Math.random() * 3900) - 2000 + '%';
        let randomDegree = Math.floor(Math.random() * 360) + 'deg';
        // Update the transform of the wheel to the new final position and rotation
        wheel.style.transform = `translate(${randomLeft}, ${randomTop}) rotate(${randomDegree})`;
    });
}, 30000);