const SectionDivider = ({ children }) => {
  return <>

    {children.map((Element, index) => index == 0 ? Element : <><hr /> Element</>)}
  </>
}

export default SectionDivider;