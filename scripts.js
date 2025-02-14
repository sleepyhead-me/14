document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('.scene');
    const girl = document.querySelector('.girl');
    const boy = document.querySelector('.boy');
    const flower = document.querySelector('.flower');
    const bubble = document.querySelector('.bubble');

    // Sequence control
    function animate(sequence) {
        let delay = 0;
        sequence.forEach(({action, duration = 1000}) => {
            setTimeout(action, delay);
            delay += duration;
        });
    }

    // Animation sequence
    animate([
        { // Boy walks to girl
            action: () => {
                boy.style.left = '50%';
                flower.style.opacity = '1';
            },
            duration: 2000
        },
        { // Propose
            action: () => {
                bubble.style.opacity = '1';
                bubble.textContent = 'I love you';
                bubble.style.left = '45%';
                bubble.style.bottom = '120px';
            },
            duration: 1000
        },
        { // Girl rejects
            action: () => {
                bubble.textContent = 'No.';
                bubble.style.left = '55%';
                girl.style.left = '100%';
            },
            duration: 2000
        },
        { // Boy walks to viewer
            action: () => {
                bubble.style.opacity = '0';
                boy.style.left = '30%';
            },
            duration: 1000
        },
        { // Final message
            action: () => {
                bubble.style.opacity = '1';
                bubble.textContent = "Happy Valentine's Day.\nMy exam is tomorrow. Bye.";
                bubble.style.left = '30%';
                bubble.style.bottom = '200px';
            },
            duration: 3000
        },
        { // Boy exits
            action: () => {
                boy.style.left = '100%';
                bubble.style.opacity = '0';
            }
        }
    ]);
});
