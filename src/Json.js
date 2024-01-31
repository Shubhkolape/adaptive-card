const Agent = {
    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
    type: 'AdaptiveCard',
    $data: {
      age: '10',
      price: '35',
      customer: {
        authstatus: 'authenticated',
      },
    },
    version: '1.6',
    body: [
      {
        type: 'TextBlock',
        $when: '${customer.authstatus == "unauthenticated"}',
        color: 'attention',
        text: '${age}',
      },
      {
        type: 'Container',
        style: 'accent',
        spacing: 'None',
        items: [
          {
            type: 'ColumnSet',
            spacing: 'None',
            columns: [
              {
                type: 'Column',
                width: 'auto',
                verticalContentAlignment: 'Center',
                items: [
                  {
                    type: 'Image',
                    url: 'https://6ibo0i.csb.app/images/contact.png',
                    size: 'Medium',
                    style: 'Person',
                  },
                ],
              },
              {
                type: 'Column',
                width: 'stretch',
                items: [
                  {
                    type: 'TextBlock',
                    text: '${customer.authstatus}',
                    weight: 'Bolder',
                    size: 'Large',
                  },
                  {
                    type: 'TextBlock',
                    text: 'Email: prathameshv@bravishma.com',
                    spacing: 'None',
                    wrap: true,
                  },
                  {
                    type: 'TextBlock',
                    text: 'Mobile: +919890945819',
                    spacing: 'None',
                    wrap: true,
                  },
                  {
                    type: 'TextBlock',
                    text: 'Account Number: 9890945819',
                    spacing: 'None',
                    wrap: true,
                  },
                  {
                    type: 'TextBlock',
                    text: 'VIP/Regular: VIP',
                    spacing: 'None',
                    wrap: true,
                  },
                ],
                horizontalAlignment: 'Left',
              },
              {
                type: 'Column',
                width: 'auto',
                verticalContentAlignment: 'Center',
                items: [
                  {
                    type: 'Image',
                    url: 'https://6ibo0i.csb.app/images/VIP.png',
                    size: 'Medium',
                    horizontalAlignment: 'Center',
                    style: 'Person',
                  },
                ],
              },
            ],
          },
        ],
        backgroundImage: {
          url: 'https://i.pinimg.com/564x/95/c4/16/95c4162be205dd5b135e944826b4c94f.jpg',
        },
      },
      {
        type: 'Container',
        spacing: 'Small',
        style: 'accent',
        items: [
          {
            type: 'TextBlock',
            text: 'Session Information',
            wrap: true,
            style: 'heading',
            weight: 'Bolder',
            color: 'Dark',
            horizontalAlignment: 'Left',
            size: 'Medium',
            isSubtle: false,
          },
          {
            type: 'ActionSet',
            actions: [
              {
                type: 'Action.ShowCard',
                title: 'Journey',
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'TextBlock',
                      text: 'Customer Journey',
                      wrap: true,
                      style: 'heading',
                      weight: 'Bolder',
                      color: 'Dark',
                      horizontalAlignment: 'Left',
                      size: 'Medium',
                      isSubtle: false,
                    },
                    {
                      type: 'ColumnSet',
                      spacing: 'Medium',
                      separator: true,
                      columns: [
                        {
                          type: 'Column',
                          width: 1,
                          items: [
                            {
                              type: 'TextBlock',
                              text: 'Desktop Website',
                              isSubtle: false,
                              wrap: true,
                              weight: 'Default',
                              style: 'columnHeader',
                              horizontalAlignment: 'Center',
                            },
                            {
                              type: 'Image',
                              url: 'https://6ibo0i.csb.app/images/website.png',
                              backgroundColor: 'transparent',
                              altText: 'Desktop Website',
                              height: '35px',
                              horizontalAlignment: 'Center',
                              width: '40px',
                              spacing: 'None',
                            },
                          ],
                          verticalContentAlignment: 'Center',
                        },
                        {
                          type: 'Column',
                          width: 'auto',
                          items: [
                            {
                              type: 'Image',
                              url: 'https://6ibo0i.csb.app/images/rightarrow.png',
                              backgroundColor: 'transparent',
                              altText: 'route',
                              size: 'Small',
                              width: '50px',
                              height: '30px',
                              horizontalAlignment: 'Center',
                              spacing: 'None',
                            },
                            {
                              type: 'Image',
                              url: 'https://6ibo0i.csb.app/images/chat.png',
                              horizontalAlignment: 'Center',
                              size: 'Small',
                              width: '20px',
                              height: '20px',
                              spacing: 'None',
                            },
                          ],
                          verticalContentAlignment: 'Center',
                          backgroundImage: {
                            verticalAlignment: 'Center',
                          },
                          spacing: 'None',
                        },
                        {
                          type: 'Column',
                          width: 1,
                          items: [
                            {
                              type: 'TextBlock',
                              text: 'Chatbot',
                              isSubtle: false,
                              horizontalAlignment: 'Center',
                              wrap: true,
                              style: 'columnHeader',
                            },
                            {
                              type: 'Image',
                              url: 'https://6ibo0i.csb.app/images/bot.png',
                              backgroundColor: 'transparent',
                              altText: 'Bot',
                              horizontalAlignment: 'Center',
                              width: '40px',
                              height: '35px',
                              spacing: 'None',
                            },
                          ],
                        },
                        {
                          type: 'Column',
                          width: 'auto',
                          items: [
                            {
                              type: 'Image',
                              url: 'https://6ibo0i.csb.app/images/rightarrow.png',
                              backgroundColor: 'transparent',
                              altText: 'route',
                              size: 'Small',
                              width: '50px',
                              height: '30px',
                            },
                            {
                              type: 'Image',
                              url: 'https://6ibo0i.csb.app/images/chat.png',
                              horizontalAlignment: 'Center',
                              size: 'Small',
                              width: '20px',
                              height: '20px',
                              spacing: 'None',
                            },
                          ],
                          backgroundImage: {
                            verticalAlignment: 'Center',
                          },
                          verticalContentAlignment: 'Center',
                          spacing: 'None',
                        },
                        {
                          type: 'Column',
                          width: 1,
                          items: [
                            {
                              type: 'TextBlock',
                              text: 'Agent',
                              isSubtle: false,
                              horizontalAlignment: 'Center',
                              wrap: true,
                            },
                            {
                              type: 'Image',
                              url: 'https://6ibo0i.csb.app/images/agent.png',
                              backgroundColor: 'transparent',
                              altText: 'Bit',
                              horizontalAlignment: 'Center',
                              width: '32px',
                              height: '35px',
                              spacing: 'None',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'Container',
                      items: [
                        {
                          type: 'TextBlock',
                          size: 'Small',
                          weight: 'Bolder',
                          text: 'Channel: WebChat',
                          horizontalAlignment: 'Left',
                          wrap: true,
                          style: 'heading',
                        },
                        {
                          type: 'TextBlock',
                          size: 'Small',
                          weight: 'Bolder',
                          text: 'Transcript: ',
                          horizontalAlignment: 'Left',
                          wrap: true,
                          style: 'heading',
                        },
                        {
                          type: 'TextBlock',
                          text: 'Assistant [6-7-2023 6:57:41]: Welcome!!! How can I help you? Do you want to proceed with... Banking Services, Card Services, FAQs, Live Agent? \nPrathamesh Vibhute [6-7-2023 6:57:41]: Live Agent \nAssistant [6-7-2023 6:57:44]: Please enter your registered Mobile Number (in the format +<country code><mobile number>, eg. +17202623702) \nPrathamesh Vibhute [6-7-2023 6:57:44]: +919890945819 \nAssistant [6-7-2023 6:57:44]: Great, I can see that you are an existing Beyond Bank customer. \nAssistant [6-7-2023 6:57:44]: Okay, please standby while I check if any of our Banking Services Agents are available to assist you... \nAssistant [6-7-2023 6:57:55]: I can see that our Banking Services Agents are available at this moment. Please wait while I request one of them to join this conversation... \n',
                          wrap: true,
                          separator: true,
                        },
                      ],
                      separator: true,
                      spacing: 'Small',
                    },
                    {
                      type: 'TextBlock',
                      text: 'AI Summary',
                      wrap: true,
                      size: 'Small',
                      weight: 'Bolder',
                      spacing: 'Medium',
                    },
                    {
                      type: 'TextBlock',
                      wrap: true,
                      separator: true,
                    },
                  ],
                },
                iconUrl: 'https://6ibo0i.csb.app/images/customer-journey.png',
                style: 'positive',
              },
              {
                type: 'Action.ShowCard',
                title: 'UnAuthenticated',
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'Container',
                      style: 'attention',
                      items: [
                        {
                          type: 'ColumnSet',
                          columns: [
                            {
                              type: 'Column',
                              width: '40px',
                              items: [
                                {
                                  type: 'Image',
                                  url: 'https://6ibo0i.csb.app/images/unauthenticated.png',
                                  height: '30px',
                                  width: '30px',
                                  spacing: 'None',
                                },
                              ],
                            },
                            {
                              type: 'Column',
                              width: 'stretch',
                              items: [
                                {
                                  type: 'TextBlock',
                                  text: 'UnAuthenticated!!!',
                                  wrap: true,
                                  size: 'Large',
                                  weight: 'Bolder',
                                  horizontalAlignment: 'Center',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      verticalContentAlignment: 'Center',
                    },
                    {
                      type: 'TextBlock',
                      text: 'The customer has not been Authenticated. You will not be able to view Customer Account Details until the Customer is Authenticated',
                      wrap: true,
                    },
                    {
                      type: 'TextBlock',
                      text: 'Enrolled for Digital Authentication?',
                      wrap: true,
                      weight: 'Bolder',
                      style: 'heading',
                      size: 'Medium',
                    },
                    {
                      type: 'FactSet',
                      facts: [
                        {
                          title: 'Facial Biometrics',
                          value: 'YES',
                        },
                        {
                          title: 'FIDO2/Device',
                          value: 'YES',
                        },
                        {
                          title: 'Mobile App',
                          value: 'YES',
                        },
                      ],
                      spacing: 'None',
                      separator: true,
                    },
                  ],
                },
                style: 'positive',
                iconUrl: 'https://6ibo0i.csb.app/images/unauthenticated.png',
              },
              {
                type: 'Action.ShowCard',
                title: 'Current: neutral',
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'Container',
                      style: 'accent',
                      items: [
                        {
                          type: 'ColumnSet',
                          columns: [
                            {
                              type: 'Column',
                              width: '40px',
                              items: [
                                {
                                  type: 'Image',
                                  url: 'https://6ibo0i.csb.app/images/neutral.png',
                                  height: '30px',
                                  width: '30px',
                                  spacing: 'None',
                                },
                              ],
                            },
                            {
                              type: 'Column',
                              width: 'stretch',
                              items: [
                                {
                                  type: 'TextBlock',
                                  text: 'Current Sentiment',
                                  wrap: true,
                                  size: 'Small',
                                  weight: 'Bolder',
                                  horizontalAlignment: 'Left',
                                  style: 'columnHeader',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      verticalContentAlignment: 'Center',
                      separator: true,
                    },
                  ],
                },
                style: 'positive',
                iconUrl: 'https://6ibo0i.csb.app/images/neutral.png',
              },
              {
                type: 'Action.ShowCard',
                title: 'Overall: unhappy',
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'Container',
                      items: [
                        {
                          type: 'ColumnSet',
                          $data: '${$root.tips}',
                          columns: [
                            {
                              type: 'Column',
                              width: '60px',
                              items: [
                                {
                                  type: 'Image',
                                  url: 'https://6ibo0i.csb.app/images/unhappy.png',
                                  width: '60px',
                                  height: '60px',
                                },
                              ],
                            },
                            {
                              type: 'Column',
                              width: 75,
                              items: [
                                {
                                  type: 'TextBlock',
                                  text: 'Customer Live Chat Transcript',
                                  weight: 'Bolder',
                                  wrap: true,
                                },
                                {
                                  type: 'ColumnSet',
                                  columns: [
                                    {
                                      type: 'Column',
                                      width: 'stretch',
                                      items: [
                                        {
                                          type: 'TextBlock',
                                          text: 'Agent PrabishB [6-7-2023 6:59:6]: Welcome Mr. Vibhute! How may I help you today? \nPrathamesh Vibhute [6-7-2023 6:59:35]: please waive my late fee \n',
                                          wrap: true,
                                        },
                                      ],
                                    },
                                  ],
                                  spacing: 'Small',
                                },
                              ],
                              verticalContentAlignment: 'Center',
                            },
                          ],
                          spacing: 'Medium',
                          separator: true,
                          style: 'emphasis',
                        },
                      ],
                    },
                  ],
                },
                style: 'positive',
                iconUrl: 'https://6ibo0i.csb.app/images/unhappy.png',
              },
            ],
          },
        ],
      },
      {
        type: 'Container',
        items: [
          {
            type: 'TextBlock',
            text: 'Suggested Knowledge Articles',
            wrap: true,
            style: 'heading',
            weight: 'Bolder',
            color: 'Dark',
            horizontalAlignment: 'Left',
            size: 'Medium',
            isSubtle: false,
          },
          {
            type: 'RichTextBlock',
            inlines: [
              {
                type: 'TextRun',
                text: 'Topics: ',
                weight: 'Bolder',
              },
              {
                type: 'TextRun',
                text: 'Credit Card',
                highlight: true,
              },
              {
                type: 'TextRun',
                text: '  ',
              },
              {
                type: 'TextRun',
                text: ' Payment Methods',
                highlight: true,
              },
              {
                type: 'TextRun',
                text: '  ',
              },
              {
                type: 'TextRun',
                text: ' Personal Loans',
                highlight: true,
              },
            ],
          },
          {
            type: 'ActionSet',
            actions: [
              {
                type: 'Action.ShowCard',
                title: 'Article #1: Digital Cards - Beyond Bank',
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'TextBlock',
                      text: 'Digital Cards - Beyond Bank',
                      size: 'Medium',
                      wrap: true,
                    },
                    {
                      type: 'TextBlock',
                      text: 'With your Beyond Bank Digital Card, you’ll never be without your card again. Digital Cards are a digital version of your plastic card, stored safely within your Mobile App and Internet Banking. Digital Cards allow you to access and add your card details to your mobile wallet so you can transact online and in person with it straight away, even ...',
                      wrap: true,
                    },
                  ],
                  actions: [
                    {
                      type: 'Action.OpenUrl',
                      title: 'Click to Open',
                      url: 'https://www.beyondbank.com.au/banking/bank-with-us/digital-cards',
                    },
                  ],
                },
                iconUrl: 'https://6ibo0i.csb.app/images/knowledge.png',
                style: 'positive',
              },
              {
                type: 'Action.ShowCard',
                title:
                  'Article #2: Scam alert - Unsolicited calls - Beyond Bank',
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'TextBlock',
                      text: 'Scam alert - Unsolicited calls - Beyond Bank',
                      size: 'Medium',
                      wrap: true,
                    },
                    {
                      type: 'TextBlock',
                      text: "We've recently received reports of scammers impersonating us, including spoofing our contact phone numbers. Some of our customers are getting unsolicited calls from the ‘Beyond Bank Fraud Team’ to do one or more of the following: Reset Internet Banking passwords and ask for SMS codes.",
                      wrap: true,
                    },
                  ],
                  actions: [
                    {
                      type: 'Action.OpenUrl',
                      title: 'Click to Open',
                      url: 'https://www.beyondbank.com.au/about-us/news/online-security/scam-alert-september-2022.html',
                    },
                  ],
                },
                iconUrl: 'https://6ibo0i.csb.app/images/knowledge.png',
                style: 'positive',
              },
              {
                type: 'Action.ShowCard',
                title:
                  "Article #3: Switch | It's easy to switch banks | Beyond Bank",
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'TextBlock',
                      text: "Switch | It's easy to switch banks | Beyond Bank",
                      size: 'Medium',
                      wrap: true,
                    },
                    {
                      type: 'TextBlock',
                      text: 'Need help switching banks? We make it easy. We can transfer your regular payments and credits, making the transfer simple for you. Find out more!',
                      wrap: true,
                    },
                  ],
                  actions: [
                    {
                      type: 'Action.OpenUrl',
                      title: 'Click to Open',
                      url: 'https://www.beyondbank.com.au/switch-banks.html',
                    },
                  ],
                },
                iconUrl: 'https://6ibo0i.csb.app/images/knowledge.png',
                style: 'positive',
              },
            ],
          },
        ],
        separator: true,
        style: 'accent',
      },
      {
        type: 'Container',
        style: 'accent',
        items: [
          {
            type: 'TextBlock',
            text: 'Customer Profile',
            wrap: true,
            size: 'Medium',
            weight: 'Bolder',
            horizontalAlignment: 'Left',
            style: 'columnHeader',
            spacing: 'Small',
          },
          {
            $when: '${customer.authstatus == "unauthenticated"}',
            type: 'FactSet',
            spacing: 'Small',
            facts: [
              {
                title: 'Credit Card Name',
                value: 'Visa Classic',
                separator: 'true',
              },
              {
                title: 'Credit Card Number',
                value: '1234567856785678',
                separator: 'true',
              },
              {
                title: 'Outstanding Payment (USD)',
                value: '10,000',
                separator: 'true',
              },
              {
                title: 'Late Fee Amount (USD)',
                value: '250',
                separator: 'true',
              },
              {
                title: 'Previous Payment History',
                value: 'Regular',
                separator: 'true',
              },
              {
                title: 'Customer Relationship Status',
                value: 'Corporate Account Customer',
                separator: 'true',
              },
            ],
            separator: true,
          },
        ],
        spacing: 'Small',
        separator: true,
      },
      {
        type: 'Container',
        spacing: 'Small',
        style: 'accent',
        items: [
          {
            type: 'TextBlock',
            text: 'Suggested Response',
            wrap: true,
            style: 'heading',
            weight: 'Bolder',
            color: 'Dark',
            horizontalAlignment: 'Left',
            size: 'Medium',
            isSubtle: false,
          },
          {
            type: 'Input.Text',
            id: 'botsuggestiontext',
            placeholder: 'Suggested Response',
            maxLength: 500,
            isMultiline: true,
            value:
              'We will certainly do our best to waive the fees if possible. Please let us know how we can help.',
          },
          {
            type: 'Input.ChoiceSet',
            choices: [
              {
                title: 'Translate Hindi',
                value: 'Translate this message to Hindi',
              },
              {
                title: 'Shorter Message',
                value: 'Make this message shorter',
              },
              {
                title: 'Add Sympathy',
                value: 'Add sympathy to this message',
              },
              {
                title: 'Rephrase',
                value: 'Rephrase this message',
              },
              {
                title: 'Custom',
                value: 'Create a message as follows',
              },
            ],
            placeholder: 'Select Suggestion Type',
            id: 'suggestion_type',
          },
          {
            type: 'ActionSet',
          },
        ],
      },
      {
        type: 'Container',
        spacing: 'Small',
        style: 'accent',
        items: [
          {
            type: 'ActionSet',
            actions: [
              {
                type: 'Action.ShowCard',
                title: 'Create Case',
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'TextBlock',
                      size: 'Medium',
                      weight: 'Bolder',
                      text: ' Create a Case',
                      horizontalAlignment: 'Center',
                      wrap: true,
                      style: 'heading',
                    },
                    {
                      type: 'Input.ChoiceSet',
                      id: 'case_reason',
                      label: 'Case Reason',
                      isRequired: true,
                      errorMessage: 'This is a required input',
                      placeholder: 'Please choose',
                      choices: [
                        {
                          title: 'Address Update',
                          value: 'Address Update',
                        },
                        {
                          title: 'Password Reset',
                          value: 'Password Reset',
                        },
                        {
                          title: 'Incorrect Transaction',
                          value: 'Incorrect Transaction',
                        },
                        {
                          title: 'Account Statement',
                          value: 'Account Statement',
                        },
                        {
                          title: 'Card Replacement',
                          value: 'Card Replacement',
                        },
                        {
                          title: 'Other',
                          value: 'Other',
                        },
                      ],
                    },
                    {
                      type: 'Input.Text',
                      label: 'Subject',
                      id: 'case_subject',
                      isRequired: true,
                      horizontalAlignment: 'Left',
                      errorMessage: 'Subject is required',
                    },
                    {
                      type: 'Input.Text',
                      label: 'Description',
                      horizontalAlignment: 'Left',
                      isRequired: true,
                      isMultiline: true,
                      id: 'case_description',
                    },
                  ],
                },
                id: 'createticket',
                style: 'positive',
                iconUrl: 'https://6ibo0i.csb.app/images/createticket.png',
              },
              {
                type: 'Action.ShowCard',
                title: 'Find Case',
                card: {
                  type: 'AdaptiveCard',
                },
                style: 'positive',
                iconUrl: 'https://6ibo0i.csb.app/images/findticket.png',
              },
              {
                type: 'Action.ShowCard',
                title: 'Create Lead',
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'TextBlock',
                      size: 'Medium',
                      weight: 'Bolder',
                      text: ' Create a Lead',
                      horizontalAlignment: 'Center',
                      wrap: true,
                      style: 'heading',
                    },
                    {
                      type: 'Input.ChoiceSet',
                      id: 'lead_product',
                      label: 'Product Interest',
                      isRequired: true,
                      errorMessage: 'This is a required input',
                      placeholder: 'Please choose',
                      choices: [
                        {
                          title: 'Credit Card',
                          value: 'Credit Card',
                        },
                        {
                          title: 'Home Loan',
                          value: 'Home Loan',
                        },
                        {
                          title: 'Car Loan',
                          value: 'Car Loan',
                        },
                        {
                          title: 'Fixed Deposit',
                          value: 'Fixed Deposit',
                        },
                        {
                          title: 'Other',
                          value: 'Other',
                        },
                      ],
                    },
                    {
                      type: 'Input.Text',
                      label: 'Description',
                      horizontalAlignment: 'Left',
                      isRequired: true,
                      isMultiline: true,
                      id: 'lead_description',
                    },
                  ],
                },
                style: 'positive',
                iconUrl: 'https://6ibo0i.csb.app/images/createlead.png',
                tooltip: 'Add a new lead',
              },
            ],
            horizontalAlignment: 'Left',
          },
        ],
        horizontalAlignment: 'Left',
      },
      {
        type: 'Container',
        spacing: 'Small',
        style: 'accent',
        items: [
          {
            type: 'ActionSet',
            actions: [
              {
                type: 'Action.ShowCard',
                title: 'Email Composer',
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'TextBlock',
                      size: 'Medium',
                      weight: 'Bolder',
                      text: 'Email Composer',
                      horizontalAlignment: 'Center',
                      wrap: true,
                      style: 'heading',
                    },
                    {
                      type: 'Input.Text',
                      label: 'Email ID',
                      style: 'Email',
                      id: 'email_id',
                      value: 'prathameshv@bravishma.com',
                    },
                    {
                      type: 'Input.Text',
                      label: 'Subject',
                      id: 'email_subject',
                      value: 'Beyond Bank',
                    },
                    {
                      type: 'Input.Text',
                      label: 'Email Body',
                      isMultiline: true,
                      id: 'email_body',
                      value: 'Dear Vibhute, \n\nRegards,\nBeyond Bank Support',
                    },
                  ],
                },
                style: 'positive',
                iconUrl: 'https://6ibo0i.csb.app/images/composeemail.png',
              },
              {
                type: 'Action.ShowCard',
                title: 'SMS Composer',
                card: {
                  type: 'AdaptiveCard',
                  body: [
                    {
                      type: 'TextBlock',
                      size: 'Medium',
                      weight: 'Bolder',
                      text: 'SMS Composer',
                      horizontalAlignment: 'Center',
                      wrap: true,
                      style: 'heading',
                    },
                    {
                      type: 'Input.Text',
                      label: 'SMS',
                      id: 'sms_id',
                      value: '+919890945819',
                    },
                    {
                      type: 'Input.Text',
                      label: 'SMS Body',
                      isMultiline: true,
                      id: 'sms_body',
                    },
                  ],
                },
                style: 'positive',
                iconUrl: 'https://6ibo0i.csb.app/images/composesms.png',
              },
            ],
          },
        ],
      },
    ],
  }

  export default Agent