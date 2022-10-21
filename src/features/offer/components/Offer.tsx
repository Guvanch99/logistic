import { useForm } from 'react-hook-form'
import styled, { css } from 'styled-components/macro'
import { useMedia } from 'react-use'
import { useTranslation } from 'react-i18next'
import { FC, useState } from 'react'
import emailjs from 'emailjs-com'
import { TForm } from '../types'
import { BaseButton } from '../../../core/components/CustomButton'
import CustomInput from '../../../core/components/CustomInput'
import Image from '../../../core/assets/courier.jpeg'
import backgroundImage from '../../../core/assets/logistic.webp'
import { flex, fontFamily } from '../../../core/styles/mixins'
import CustomTextArea from '../../../core/components/CustomTextArea'
import { emailValidation, requiredRule } from '../../../core/utils/formUtils'
import { useNotificationContext } from '../../notifications/state/useNotification'

const ContentStyled = styled.div<{isTablet: boolean, noBackgroundImage?: boolean}>`
  ${flex({ justify: 'center', align: 'center' })};
  margin-bottom: 20px;
  object-fit: contain;
  background:linear-gradient(90deg, rgba(2,0,36,0.7) 0%, rgba(100,9,121,0.8197872899159664) 35%, rgba(0,212,255,0.7) 100%), url(${backgroundImage}) top center no-repeat;
  background-size: 100% 100%;
  padding: 0 20px;
  height: 500px;
  
  ${({ isTablet }) => isTablet && css`
    flex-direction: column;
    height: auto;
    padding: 20px;
    gap: 20px;
  `}
  
  ${({ noBackgroundImage }) => noBackgroundImage && css`
  background: none;
  `}
`

const LabelStyled = styled.p`
  ${fontFamily()}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkBlack};
  font-size: 14px;
  margin-bottom: 4px;
`

const InputWrapper = styled.div`
  max-width: 710px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, minmax(300px, auto));
  grid-gap: ${30};
  
  @media (max-width: 788px) {
    grid-template-columns: 300px;
  }
  
  & > div{
  margin: 10px 10px 10px 0;
}
`

const TextStyled = styled.h1`
  ${fontFamily()}
  font-size: 35px;
  color: ${({ theme }) => theme.colors.darkBlack};
  font-weight: 700;

  :after {
    width: 40px;
    content: "";
    height: 4px;
    background: ${({ theme }) => theme.colors.blue500};
    margin-top: 20px;
    display: block;
  }
`

const FormStyled = styled.form`
  padding: 25px;
  //margin: 0 20px;
  box-shadow: 0 1px 10px rgb(0 0 0 / 20%);
  background: ${({ theme }) => theme.colors.white};
`

const ButtonStyled = styled(BaseButton)`
&&{
  margin-top: 20px;
  height: 40px;
  width: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.blue500};
  color: ${({ theme }) => theme.colors.white};

  :hover{
    background: ${({ theme }) => theme.colors.blue800};
  }
}
`

const ImageStyled = styled.img<{isTablet: boolean}>`
  //max-width: 400px;
  //height: 450px;
  //object-fit: cover;
  //border-radius: 30px;
  width: 100%;
  max-width: ${({ isTablet }) => (isTablet ? 610 : 350)}px;
  height: 330px;
  object-fit: cover;
  object-position: bottom;
  margin-left:${({ isTablet }) => (isTablet ? 0 : 20)}px;
  border-radius: 10px;
`

const Offer: FC<{noBackgroundImage?: boolean}> = ({ noBackgroundImage }) => {
  const [isDisabled, setDisabled] = useState(false)
  const { t } = useTranslation('translation')
  const { showSuccessNotification, showErrorNotification } = useNotificationContext()
  const isTablet = useMedia('(max-width: 920px)')
  const { control, handleSubmit } = useForm<TForm>({
    defaultValues: {
      email: '',
      message: '',
      name: ''
    }
  })
  const submit = (data: TForm) => {
    // @ts-ignore
    setDisabled(true)
    emailjs.send('service_rzza98n', 'template_hus84l9', {
      name: data.name,
      email: data.email,
      message: data.message
    }, 'AORvgXZn006iVvcqU')
      .then((res) => {
        showSuccessNotification(t('notifcation'))
        setDisabled(false)
      })
      .catch((error) => showErrorNotification(error))
  }
  return (
    <ContentStyled isTablet={isTablet} noBackgroundImage={noBackgroundImage}>
      <FormStyled onSubmit={handleSubmit(submit)}>
        <TextStyled>{t('getOffer.label')}</TextStyled>
        <InputWrapper>
          <div>
            <LabelStyled>{t('getOffer.nameSurname')}</LabelStyled>
            <CustomInput
              placeholder={t('getOffer.nameSurname')}
              control={control}
              name="name"
              rules={{
                required: requiredRule('Please fill in all required fields.')
              }}
            />
          </div>
          <div>
            <LabelStyled>{t('getOffer.email')}</LabelStyled>
            <CustomInput
              placeholder={t('getOffer.email')}
              control={control}
              rules={{
                required: requiredRule('Please fill in all required fields.'),
                validate: emailValidation
              }}
              name="email"/>
          </div>
        </InputWrapper>
        <div>
          <LabelStyled>{t('getOffer.message')}</LabelStyled>
          <CustomTextArea
            control={control}
            name="message"
            rules={{
              required: requiredRule('Please fill in all required fields.')
            }}/>
        </div>
        <ButtonStyled disabled={isDisabled} type="submit">{t('getOffer.submit')}</ButtonStyled>
      </FormStyled>
      {!noBackgroundImage && <ImageStyled isTablet={isTablet} src={Image} alt="image"/>}
    </ContentStyled>
  )
}

export default Offer
