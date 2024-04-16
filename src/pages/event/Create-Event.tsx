//hook
import { useState } from 'react'

// components
import { PageHeader } from '@layouts/components'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import InfomationEvent from '@components/common/event/InfomationEventCreate'
import BannerEvent from '@components/common/event/BannerEventCreate'
import TicketEventCreate from '@components/common/event/TicketEventCreate'
import ReviewEventCreate from '@components/common/event/ReviewEventCreate'

const CreateEvent = () => {
  const steps = ['Infomation', 'Banner Image', 'Set Ticket', 'Review']
  const [active, setActive] = useState<number>(0)

  return (
    <div className='min-h-screen'>
      <PageHeader title='Create New Event' />
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={active} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <p className='text-header'>{label}</p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {active === 0 && (
        <InfomationEvent
          setActive={(value) => {
            setActive(value)
          }}
        />
      )}

      {active === 1 && (
        <BannerEvent
          setActive={(value) => {
            setActive(value)
          }}
        />
      )}

      {active === 2 && (
        <TicketEventCreate
          setActive={(value) => {
            setActive(value)
          }}
        />
      )}

      {active === 3 && (
        <ReviewEventCreate
          setActive={(value) => {
            setActive(value)
          }}
        />
      )}
    </div>
  )
}

export default CreateEvent
