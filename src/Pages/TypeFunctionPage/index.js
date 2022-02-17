// chakra
import {
    Flex,
    Stack,
    SimpleGrid
} from '@chakra-ui/react';

// components
import CustomButton from '../../components/CustomButton';
import RightImage from '../../components/RightImage';

//assets
import linearImage from '../../assets/linear.svg';
import exponencialImage from '../../assets/exponencial.svg';
import sigmoidImage from '../../assets/sigmoid.svg';
import normalImage from '../../assets/normal.svg';


//Button
import CustomButtonType from '../../components/CustomButtonType';
import SmallText from '../../components/SmallText';
import BigText from '../../components/BigText';

export default function TypeFunctionPage() {

    return (
        <Stack
            minH={'100vh'}
            direction={{ base: 'column', md: 'row' }}
            bgColor="#000"
        >
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>

                    <Flex
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >

                        <SmallText text="Escolha" />
                        <BigText text='o tipo' />
                        <SmallText text='de função' />

                        <br />
                        <br />

                        <SimpleGrid
                            columns={2} spacing={4}
                            justifyContent={'center'}
                            justifySelf={'center'}
                            justifyItems={'center'}
                            alignItems={'center'}>

                            <CustomButtonType
                                typeimage={linearImage}
                                type={'Linear'}
                            />
                            <CustomButtonType
                                typeimage={exponencialImage}
                                type={'Exponencial'}
                            />
                            <CustomButtonType
                                typeimage={sigmoidImage}
                                type={'Sigmoid'}
                            />
                            <CustomButtonType
                                typeimage={normalImage}
                                type={'Normal'}
                            />

                        </SimpleGrid>

                        <br />
                        <br />


                        <CustomButton
                            text={"Próximo"}
                            path={'/UploadFilePage'}
                        />

                    </Flex>
                </Stack>
            </Flex>

            <RightImage />


        </Stack>
    );
}