const SplitterBar = function(container) {
    // We want two divs that we're dividing
    const leftSide = document.createElement('div');
    const rightSide = document.createElement('div');
    const splitter = document.createElement('div');

    leftSide.classList.add('leftSide');
    rightSide.classList.add('rightSide');
    splitter.classList.add('splitter');

    
    container.appendChild(splitter);

    splitter.style.width = '10px';
    splitter.style.left = splitter.parentElement.offsetWidth / 2 - (splitter.offsetWidth / 2) + 'px';

    leftSide.style.background = 'red';
    rightSide.style.background = 'blue';
    splitter.style.background = 'black';


    leftSide.style.left = 0;
    leftSide.style.top = 0;
    leftSide.style.width = splitter.style.left;

    rightSide.style.left = (splitter.offsetLeft + 10) + 'px';
    rightSide.style.top = 0;
    rightSide.style.width = container.offsetWidth - splitter.offsetLeft - 10 +  'px';

    container.appendChild(leftSide);
    container.appendChild(rightSide);

    let mouseIsDown = false;
    let startX = null;
    let globalXCoordinate = null;

    splitter.addEventListener('mousedown', function(evt) {
        evt.preventDefault();
        mouseIsDown = true;
        startX = evt.offsetX;
        startY = evt.offsetY;
    });

    leftSide.addEventListener('mousemove', function(evt) {
        evt.preventDefault();
        let left = this.offsetLeft;
        globalXCoordinate = left + evt.offsetX - startX;
    });

    rightSide.addEventListener('mousemove', function(evt) {
        evt.preventDefault();
        let left = this.offsetLeft;
        globalXCoordinate = left + evt.offsetX - startX;
    });

    splitter.addEventListener('mousemove', function(evt) {
        evt.preventDefault();
        let left = this.offsetLeft;
        globalXCoordinate = left + evt.offsetX - startX;
    });


    document.body.addEventListener('mouseup', function(evt) {
        mouseIsDown = false;
    });

    document.addEventListener('mouseup', function(evt) {
        mouseIsDown = false;
    });


    document.body.addEventListener('mousemove', function(evt) {
        evt.preventDefault();
        
        if (mouseIsDown) {
            if (splitter.offsetLeft + splitter.offsetWidth > container.offsetWidth) {
                globalXCoordinate = container.offsetWidth - splitter.offsetWidth;
            }

            if (splitter.offsetLeft < 0) {
                globalXCoordinate = 0;
            }

            splitter.style.left = globalXCoordinate + 'px';
            leftSide.style.width = splitter.offsetLeft + 'px';
            rightSide.style.width = (container.offsetWidth - leftSide.offsetWidth - splitter.offsetWidth) + 'px';
            rightSide.style.left = splitter.offsetLeft + splitter.offsetWidth + 'px';
        }
    });

    document.addEventListener('mousemove', function(evt) {
        evt.preventDefault();
        
        if (mouseIsDown) {
            if (splitter.offsetLeft + splitter.offsetWidth > container.offsetWidth) {
                globalXCoordinate = container.offsetWidth - splitter.offsetWidth;
            }

            if (splitter.offsetLeft < 0) {
                globalXCoordinate = 0;
            }

            splitter.style.left = globalXCoordinate + 'px';
            leftSide.style.width = splitter.offsetLeft + 'px';
            rightSide.style.width = (container.offsetWidth - leftSide.offsetWidth - splitter.offsetWidth) + 'px';
            rightSide.style.left = splitter.offsetLeft + splitter.offsetWidth + 'px';
        }
    });
};