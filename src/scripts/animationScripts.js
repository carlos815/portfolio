import writeAnimation from './writeAnimation'
import wait from './wait'

export async function animatePage(page) {
  //this triggers all of the animations on a page in a neatly laid out choreography.

  //It finds the elements, and the images and animates them one by one, leaving out space using the wait function
  for (let child of page.children) {
    if (child.tagName == 'H1') {
      await writeAnimation(child)
    } else if (child.className == 'image-and-description') {
      for (let grandChild of child.children) {
        if (grandChild.tagName == 'FIGURE') {
          await wait(100)
          grandChild.style.opacity = 1
          grandChild.style.top = 0
          await wait(500)
        } else if (grandChild.className == 'description') {
          for (let element of grandChild.children) {
            element.style.opacity = 1
          }
        }
      }
    } else if (child.className == 'scroll' || child.className == 'small') {
      await wait(300)
      child.style.opacity = 1
    } else if (child.className == 'about-me') {
      for (let element of child.children) {
        await writeAnimation(element)
      }
    }
  }
}

export async function skipAnimation(page) {
  //similar to the animatePage funciton. It finds all of the relevant elements and sets the hasBeenAnimated to true. The animatino loop will stop when it sees this.
  for (let child of page.children) {
    if (child.tagName == 'H1') {
      child.hasBeenAnimated = true
    } else if (child.className == 'image-and-description') {
      for (let grandChild of child.children) {
        if (grandChild.tagName == 'FIGURE') {
          grandChild.style.opacity = 1
          grandChild.style.top = 0
        } else if (grandChild.className == 'description') {
          for (let element of grandChild.children) {
            element.hasBeenAnimated = true
          }
        }
      }
    } else if (child.className == 'scroll' || child.className == 'small') {
      child.style.opacity = 1
    } else if (child.className == 'about-me') {
      for (let element of child.children) {
        element.hasBeenAnimated = true
      }
    }
  }
}
