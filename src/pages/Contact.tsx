import {
    Box,
    Container,
    Heading,
    Text,
    Grid,
    GridItem,
    Input,
    Textarea,
    Button,
} from "@chakra-ui/react";

function Contact() {
    return (
        <Box id="contact" className="contact">
            <Container maxW="container.lg">
                <Box data-aos="fade-up">
                    <Heading size="lg" textAlign="center" mb={4}>
                        Contacto
                    </Heading>
                    <Text textAlign="center">Contactanos</Text>
                </Box>

                <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={4}>
                    <GridItem>
                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                            <GridItem>
                                <Box textAlign={{ base: "center", lg: "start" }}>
                                    <i className="bi bi-geo-alt"></i>
                                    <Heading size="md" mt={2}>
                                        Dirección
                                    </Heading>
                                    <Text>
                                        Av. Vergara 670,<br />
                                        Buenos Aires, Argentina
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Box textAlign={{ base: "center", lg: "start" }}>
                                    <i className="bi bi-telephone"></i>
                                    <Heading size="md" mt={2}>
                                        Llamanos
                                    </Heading>
                                    <Text>
                                        +54 9 11 1111 1111<br />
                                        +54 9 22 2222 2222
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Box textAlign={{ base: "center", lg: "start" }}>
                                    <i className="bi bi-envelope"></i>
                                    <Heading size="md" mt={2}>
                                        Email
                                    </Heading>
                                    <Text>
                                        info@losincas.com<br />
                                        contact@losincas.com
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Box textAlign={{ base: "center", lg: "start" }}>
                                    <i className="bi bi-clock"></i>
                                    <Heading size="md" mt={2}>
                                        Horarios
                                    </Heading>
                                    <Text>
                                        Lunes - Sabado<br />
                                        08:00 a 20:00
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem>
                        <form
                            action="/assets/js/app.js"
                            id="formulario"
                            className="php-email-form"
                        >
                            <Grid templateColumns="1fr" gap={4}>
                                <GridItem>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Nombre"
                                        required
                                    />
                                </GridItem>
                                <GridItem>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </GridItem>
                                <GridItem>
                                    <Input
                                        type="text"
                                        name="subject"
                                        placeholder="Asunto"
                                        required
                                    />
                                </GridItem>
                                <GridItem>
                                    <Textarea
                                        name="message"
                                        rows="6"
                                        placeholder="Mensaje"
                                        required
                                    />
                                </GridItem>
                                <GridItem textAlign="center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>

                                    <Button type="submit">Enviar</Button>
                                </GridItem>
                            </Grid>
                        </form>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
}

export default Contact;
