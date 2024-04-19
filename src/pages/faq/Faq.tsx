//component
import { Box } from '@mui/material'
import { PageHeader } from '@layouts/components'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

//icon
import { MdExpandMore } from 'react-icons/md'

const FAQ = () => {
  return (
    <Box m='20px'>
      <PageHeader title='FAQ' />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <Typography className='text-header' variant='h5'>
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-header'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <Typography className='text-header' variant='h5'>
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-header'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <Typography className='text-header' variant='h5'>
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-header'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <Typography className='text-header' variant='h5'>
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-header'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ
