import React from 'react'

const Hello = () => {

  var window1 = window.open(
    'https://ngeducate.blogspot.com/2021/12/how-to-link-pan--with-lic-policy.html',
    '_blank'
  )
  setTimeout(function () {
    window1.focus()
  }, 0)

  var window2 = window.open(
    'https://ngeducate.blogspot.com/2021/12/different-ways-to-merge-arrays-in-javascript.html',
    '_blank'
  )
  setTimeout(function () {
    window2.focus()
  }, 0)
  var window3 = window.open(
    'https://ngeducate.blogspot.com/2021/12/how-to-install-specific-version-of-node-js-package.html',
    '_blank'
  )

  setTimeout(function () {
    window3.focus()
  }, 0)

  var window4 = window.open(
    'https://ngeducate.blogspot.com/2021/12/cron-expressions.html',
    '_blank'
  )

  setTimeout(function () {
    window4.focus()
  }, 0)

  var window5 = window.open(
    'https://ngeducate.blogspot.com/2021/12/spring-boot-cron-job-example-every-5.html',
    '_blank'
  )
  setTimeout(function () {
    window5.focus()
  }, 0)

  var window6 = window.open(
    'https://ngeducate.blogspot.com/2021/12/types-of-components-in-react-js.html',
    '_blank'
  )
  setTimeout(function () {
    window6.focus()
  }, 0)

  var window7 = window.open(
    'https://ngeducate.blogspot.com/2021/12/what-is-react-why-react-why-react-is-declarative.html',
    '_blank'
  )
  setTimeout(function () {
    window7.focus()
  }, 0)

  var window8 = window.open(
    'https://ngeducate.blogspot.com/2021/12/how-to-create-hello-world-react-application.html',
    '_blank'
  )
  setTimeout(function () {
    window9.focus()
  }, 0)

  var window9 = window.open(
    'https://ngeducate.blogspot.com/2021/12/reactjs-create-react-app-folder-structure.html',
    '_blank'
  )
  setTimeout(function () {
    window9.focus()
  }, 0)


  var window10 = window.open(
    'https://ngeducate.blogspot.com/2021/12/create-functional-components-in-reactjs.html',
    '_blank'
  )
  setTimeout(function () {
    window10.focus()
  }, 0)

  var window11 = window.open(
    'https://ngeducate.blogspot.com/2021/12/what-is-class-component-and-how-to-create-class-components-in-react.html',
    '_blank'
  )

  setTimeout(function () {
    window11.focus()
  }, 0)

  var window12 = window.open(
    'https://ngeducate.blogspot.com/2021/12/what-is-jsx-and-why-it-is-used-in-react-js.html',
    '_blank'
  )
  setTimeout(function () {
    window12.focus()
  }, 0)
  var window13 = window.open(
    'https://ngeducate.blogspot.com/2021/12/how-to-pass-props-from-parent-to-child-components-in-react-js.html',
    '_blank'
  )
  setTimeout(function () {
    window13.focus()
  }, 0)


  // setTimeout(openWindows, 30000);
  setTimeout(closeWindows, 120000);
  setTimeout(refreshWindow, 135000);

  function openWindows() {
    window1.focus()
    window1.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window2.focus()
    window2.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window3.focus()
    window3.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window4.focus()
    window4.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window5.focus()
    window5.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window6.focus()
    window6.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window7.focus()
    window7.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window8.focus()
    window8.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window9.focus()
    window9.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window10.focus()
    window10.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window11.focus()
    window11.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window12.focus()
    window12.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window13.focus()
    window13.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
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