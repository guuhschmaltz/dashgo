import dynamic from 'next/dynamic'

import { Box, Flex, Text, theme, SimpleGrid } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-04-07T00:00:00.000Z',
      '2021-04-08T00:00:00.000Z',
      '2021-04-09T00:00:00.000Z',
      '2021-04-10T00:00:00.000Z',
      '2021-04-11T00:00:00.000Z',
      '2021-04-12T00:00:00.000Z',
      '2021-04-13T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 189]
  }
]

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex
        width="100%"
        maxWidth={1400}
        marginX="auto"
        marginY="6"
        paddingX="6"
      >
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="328px"
          alignItems="flex-start"
        >
          <Box
            padding={["6","8"]}
            paddingBottom="4"
            backgroundColor="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" marginBottom="4">Inscritos da semana</Text>
            <ApexChart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            padding={["6","8"]}
            paddingBottom="4"
            backgroundColor="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" marginBottom="4">Taxa de abertura</Text>
            <ApexChart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}