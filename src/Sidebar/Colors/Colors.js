import Input from '../../components/Input'

import './Colors.css'

function Colors({handleChange}) {
  return<div>
    <h2 className='sidebar-title color-title'>Colors</h2>
    <label className='sidebar-label-container'>
          <input onChange={handleChange} type="radio" value="" name="test3"/>
          <span className='checkmark all'></span>All
    </label>
    <Input
      handleChange={handleChange}
      value="black"
      color="black"
      title="Black"
      name="test3"
    />
    <Input
      handleChange={handleChange}
      value="white"
      color="white"
      title="Whitw"
      name="test3"
    />
    <Input
      handleChange={handleChange}
      value="red"
      color="red"
      title="Red"
      name="test3"
    />
    <Input
      handleChange={handleChange}
      value="green"
      color="green"
      title="Green"
      name="test3"
    />
    <Input
      handleChange={handleChange}
      value="blue"
      color="blue"
      title="Blue"
      name="test3"
    />
  </div>
}

export default Colors