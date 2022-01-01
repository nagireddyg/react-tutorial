import React from 'react'

const Hello = () => {

  var window1 = window.open(
    'https://ngeducate.blogspot.com/2021/12/how-to-link-pan--with-lic-policy.html',
    '_blank'
  )
  var window2 = window.open(
    'https://ngeducate.blogspot.com/2021/12/different-ways-to-merge-arrays-in-javascript.html',
    '_blank'
  )

  var window3 = window.open(
    'https://ngeducate.blogspot.com/2021/12/how-to-install-specific-version-of-node-js-package.html',
    '_blank'
  )

  var window4 = window.open(
    'https://ngeducate.blogspot.com/2021/12/cron-expressions.html',
    '_blank'
  )
  var window5 = window.open(
    'https://ngeducate.blogspot.com/2021/12/spring-boot-cron-job-example-every-5.html',
    '_blank'
  )
  var window6 = window.open(
    'https://ngeducate.blogspot.com/2021/12/types-of-components-in-react-js.html',
    '_blank'
  )
  var window7 = window.open(
    'https://ngeducate.blogspot.com/2021/12/what-is-react-why-react-why-react-is-declarative.html',
    '_blank'
  )
  var window8 = window.open(
    'https://ngeducate.blogspot.com/2021/12/how-to-create-hello-world-react-application.html',
    '_blank'
  )
  var window9 = window.open(
    'https://ngeducate.blogspot.com/2021/12/reactjs-create-react-app-folder-structure.html',
    '_blank'
  )
  var window10 = window.open(
    'https://ngeducate.blogspot.com/2021/12/create-functional-components-in-reactjs.html',
    '_blank'
  )
  var window11 = window.open(
    'https://ngeducate.blogspot.com/2021/12/what-is-class-component-and-how-to-create-class-components-in-react.html',
    '_blank'
  )
  var window12 = window.open(
    'https://ngeducate.blogspot.com/2021/12/what-is-jsx-and-why-it-is-used-in-react-js.html',
    '_blank'
  )
  var window13 = window.open(
    'https://ngeducate.blogspot.com/2021/12/how-to-pass-props-from-parent-to-child-components-in-react-js.html',
    '_blank'
  )


  setTimeout(openWindows, 10000);
  setTimeout(closeWindows, 10000);
  setTimeout(refreshWindow, 15000);

  function openWindows() {
    window1.focus()
    window2.focus()
    window3.focus()
    window4.focus()
    window5.focus()
    window6.focus()
    window7.focus()
    window8.focus()
    window9.focus()
    window10.focus()
    window11.focus()
    window12.focus()
    window13.focus()
  }

  function closeWindows() {
    window1.close()
    window2.close()
    window3.close()
    window4.close()
    window5.close()
    window6.close()
    window7.close()
    window8.close()
    window9.close()
    window10.close()
    window11.close()
    window12.close()
    window13.close()
  }

  function refreshWindow() {
    location.reload();
  }

  return (
    <div>
      <h1>Hello,</h1>

    </div>
  )
}
export default Hello