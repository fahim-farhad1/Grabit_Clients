import loading from '../../assets/common/Spinner@1x-1.0s-200px-200px.svg'

const Loading = () => {
  return (
    <div className='min-h-[calc(100vh-340px)] flex justify-center items-center'>
      <img className='h-32 w-32' src={loading} alt="" />
    </div>
  )
}

export default Loading
