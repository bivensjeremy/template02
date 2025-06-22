'use client'
import { Input, Textarea } from '@heroui/input';
import { Form } from '@heroui/form';
import { Select, SelectItem } from '@heroui/select';
import { Button } from '@heroui/button';

const ContactForm = () => {
    const animals = [
        {key: "question", label: "Ask a Question"},
        {key: "employment", label: "Employment"},
        {key: "bug", label: "Report a Bug"},
        {key: "feedback", label: "Send Feedback"},
        {key: "other", label: "Something Else"},
        // {key: "giraffe", label: "Giraffe"},
        // {key: "dolphin", label: "Dolphin"},
        // {key: "penguin", label: "Penguin"},
        // {key: "zebra", label: "Zebra"},
        // {key: "shark", label: "Shark"},
        // {key: "whale", label: "Whale"},
        // {key: "otter", label: "Otter"},
        // {key: "crocodile", label: "Crocodile"},
    ];

    return (
        <Form className='max-w-lg'>
            <Input 
                label="Name"
                type='text'
                radius='none'
            />

            <Input 
                label="Email"
                type='email'
                radius='none'
            />

            <Select 
                // className="max-w-xs" 
                label="Subject"
                radius='none'
            >
                {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
            </Select>

            <Textarea 
                label="Message" 
                radius='none'
            />

            <div className='flex justify-end w-full'>
                <Button radius='none' size='lg' color='primary'>
                    Send
                </Button>
            </div>
        </Form>
    );
}

export default ContactForm;