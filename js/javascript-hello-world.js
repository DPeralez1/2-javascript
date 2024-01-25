function getName() {
    const userName = prompt('What is your name?');
    sayHello(userName);
}
function sayHello(name) {
    alert('Hello ' + name + '!');
    console.log('Alert sent!')
}

function getMembershipPerks(mLevel) {
    /* Your switch statement should be written below this line.*/
      switch (mLevel) {
        case'gold': console.log('Unlimited Free Plays');
        case'silver': console.log('VIP Room Access');
          break;
        case'bronze': console.log('VIP Room Access on Weekdays');
          break;
        default: console.log('Invalid membership level');
      }
    }
    
    getMembershipPerks('gold');
    /* After you make changes, you will need to click the Run button on the upper right. Auto-updating preview has been turned off for this Codepen. */