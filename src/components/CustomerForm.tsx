import { useState, useEffect, useRef, useContext } from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import { FormGroup } from './FormGroup';
import { UserDetailsContext } from '../util/context/Contexts';
import { FormData } from '../types';
import { PerformanceStatsContext } from '../util/context/Contexts';



export const CustomerForm = ({
  themeSwitch = false,
  validateInput = false,
  measurePerformance = false
}: {
  themeSwitch?: boolean,
  validateInput?: boolean,
  measurePerformance?: boolean
}) => {
  const logo = useRef<HTMLImageElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const header = useRef<HTMLHeadingElement>(null)

  const [theme, setThemeMode] = useState<"light" | "dark">("light")
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(true)
  const [formData, setFormData] = useState<FormData>({
    name: 'John Doe',
    email: 'johndoe@email.com',
    phone: '+13024562353'
  });

  //@ts-ignore
  const {createPerformanceLog} = useContext(PerformanceStatsContext)

  const handleThemeSwap = () => {
    setThemeMode(theme === 'light' ? 'dark' : 'light')
  }

  const checkInputs = () => {
    let invalid = false

    const invalidInputs = container.current?.querySelectorAll<HTMLElement>('#invalidInput')

    invalidInputs?.forEach((invalidInput) => {
      if (invalidInput.dataset.invalid === "true") {
        invalid = true
      }
    })

    if (invalid) {
      setButtonEnabled(false)
    } else {
      setButtonEnabled(true)
    }
  }

  useEffect(() => {
    if (
      !logo.current ||
      !container.current ||
      !header.current
    ) { return }
    const performance = window.performance
    const markName = Date.now().toString()
    const start = performance.mark(markName)

    logo.current.src = logo.current.src.replace(/(light)|(dark)/, theme)
    container.current.style.backgroundColor = theme === 'light' ? '#f9f9f9' : '#2e2e2e'
    header.current.style.color = theme === 'light' ? '#3d3d3d' : 'white'

    const labels = [...container.current!.querySelectorAll('label')]
    const inputs = [...container.current!.querySelectorAll('input')]

    labels.forEach((label) => label.style.color = theme === 'light' ? '#3d3d3d' : 'white')
    inputs.forEach((input) => {
      if (theme === "light") {
        input.style.color = '#3d3d3d'
        input.style.backgroundColor = 'white'
        input.style.borderColor = '#cccccc'
      } else if (theme === 'dark') {
        input.style.color = 'white'
        // input.style.backgroundColor = '#3d3d3d'
        input.style.backgroundColor = '#2e2e2e'
        input.style.borderColor = '#616161'
      }
    })
    
    const end = performance.mark(markName)
    if(measurePerformance){
      createPerformanceLog(start,end)
    }
  }, [theme])

  return (
    <div ref={container} className='container'>
      <div className="navBar">
        <div className="logo">
          <img ref={logo} src="./compass-logo-light.svg" alt=""></img>
        </div>
        {!!themeSwitch && <div onClick={handleThemeSwap}>
          <ThemeSwitch theme={theme}></ThemeSwitch>
        </div>
        }
      </div>
      <h2 ref={header}>Contact Details</h2>
      <form onSubmit={undefined}>

        <UserDetailsContext.Provider value={{ formData, setFormData, checkInputs, theme }}>
          <FormGroup
            title='Name'
            id='name'
            validateInput={validateInput}
          ></FormGroup>

          <FormGroup
            title='Email'
            id='email'
            validateInput={validateInput}
          ></FormGroup>

          <FormGroup
            title='Phone'
            id='phone'
            validateInput={validateInput}
          ></FormGroup>
        </UserDetailsContext.Provider>

        <button type="submit" className={`btn${buttonEnabled === false ? " btn-locked" : ""}`} disabled={!buttonEnabled}>Next</button>
      </form>
    </div>
  );
};

