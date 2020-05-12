# React Legit Popper
Legit Popper written entirely in React with no dependencies (outside of `styled-components`). No jQuery.

# Install
Run ```npm install legit-popper-react```

# To Use
Import via `import LegitPopper from "react-legit-popper"`
Instantiate with ```<LegitPopper {...props} />```

# Configuration
If no props are passed, the default values for the popper are used. See below for details.

```
props = {
      content: // content you want displayed,
      showWhen: // % of screen user has scrolled in order for the popper to appear; default: 0 (shows immediately),
      timeUntil: // how long popper should be show on the screen before disappearing (in ms); default: shown indefinitely/doesn't disappear without user input,
      onlyOnce: // whether or not popper should be shown only once for a user; default: false,
      closeButton: // show close button; default: true,
      closeButtonPosition: // position of close button; default: "right",
      position: // potition of the popper (i.e. "br", "bl", "tr", "tl"); default: "br" (bottom right),
      bgColor: // popper background color; default: "#fff",
      textColor: // text color; default: "#444",
      borderWidth: // popper border width; default: 1,
      borderColor: // popper border color; default: "#d6d6d6",
      borderRadius: // popper border radius; default: 3,
      boxShadow: // show box shadow around popper; default: true,
      width: // width of popper window in % of horizontal screen; default: 0,
      fullWidth: // full width of popper window (same as 100% of width); default: false,
      padding: // popper padding (in px); default: 20,
    };
```

For example, to show a popper that displays only once for a user, with a close button located on the left side and with the popper located on the top right of the page:

```'
<LegitPopper
    onlyOnce
    closeButtonPosition="left"
    position="tr"
/>
