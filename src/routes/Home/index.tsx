import { Box, Card, Heading, Flex, Inset, Text, Section } from "@radix-ui/themes"
import { Link } from "react-router"

export default function Home() {
  return (
    <>
      <Section size='1'>
        <Heading>Projects</Heading>
        <Link to='/project'>All Projects</Link>
        <Flex direction='row' gap='3'>
          <Box maxWidth='240px'>
            <Card asChild>
              <Link to='/project/1'>
              <Inset clip="padding-box" side="top" pb="current">
                <img
                  src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Bold typography"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Inset>
              <Text as="p" size="3">
                Go to project detail page for this
              </Text>
            </Link>
            </Card>
          </Box>
        </Flex>
      </Section>
      
      <Section size='1'>
        <Heading>Tutorial</Heading>
        <Link to='/tutorial'>All Tutorials</Link>
      
        <Flex direction='row' gap='3'>
          <Box maxWidth='240px'>
            <Card asChild>
              <Link to='/tutorial/1'>
              <Inset clip="padding-box" side="top" pb="current">
                <img
                  src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Bold typography"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Inset>
              <Text as="p" size="3">
                Go to tutorial detail page for this 
              </Text>
            </Link>
            </Card>
          </Box>
        </Flex>
      </Section>
    </>
  )
}